<?php
require __DIR__ . '/bootstrap.php';

$passed = 0;
$failed = 0;

function same($expected, $actual) {
  if ($expected !== $actual) {
    throw new RuntimeException('Expected ' . var_export($expected, true) .
      ', got ' . var_export($actual, true));
  }
}
function test_case($name, $callback) {
  global $passed, $failed;
  reset_environment();
  try {
    $callback();
    $passed++;
    echo "PASS $name\n";
  } catch (Throwable $error) {
    $failed++;
    fwrite(STDERR, "FAIL $name: " . $error->getMessage() . "\n" . $error->getTraceAsString() . "\n");
  }
}
function rendered($callback) {
  ob_start();
  try {
    $callback();
    return ob_get_contents();
  } finally {
    ob_end_clean();
  }
}
function contains($needle, $haystack) {
  same(true, strpos($haystack, $needle) !== false);
}

test_case('plugin instance is singleton and registers hooks', function () use ($plugin) {
  same($plugin, NF_Videomail::instance('ignored', 'ignored', 'ignored'));
  new NF_Videomail();
  same(3, count($GLOBALS['calls']['add_action']));
  same(4, count($GLOBALS['calls']['add_filter']));
  same('ninja_forms_register_fields', $GLOBALS['calls']['add_filter'][0][0]);
});

test_case('registers the video field and merge tags', function () use ($plugin) {
  $fields = $plugin->register_fields(array('existing' => 'keep'));
  same('keep', $fields['existing']);
  same(true, $fields['videomail'] instanceof NF_Videomail_Fields_Videomail);
  $plugin->ninja_forms_loaded();
  same(true, Ninja_Forms()->merge_tags['video'] instanceof NF_Videomail_Tags_Merge_Video);
  same(array('action' => 1), $plugin->register_actions(array('action' => 1)));
});

test_case('loads filtered settings and custom template paths', function () use ($plugin) {
  $settings = NF_Videomail::config('videomail-field-settings');
  same(40, $settings['image_quality']['value']);
  same('false', $settings['media_library']['value']);
  same('ninja_forms_videomail_field_settings', $GLOBALS['calls']['apply_filters'][0][0]);
  same(array('existing', NF_Videomail::$templatesDir), $plugin->custom_template_path(array('existing')));
});

test_case('LiteSpeed exclusion preserves existing entries and non-arrays', function () use ($plugin) {
  same(array('existing', 'videomail-client'), $plugin->add_exclude_test(array('existing')));
  same(null, $plugin->add_exclude_test(null));
});

test_case('updates stored version only for a newer plugin', function () use ($plugin) {
  $GLOBALS['options']['NF_Videomail_Version'] = '1.0.0';
  $plugin->plugin_update_check();
  same(NF_Videomail::VERSION, $GLOBALS['options']['NF_Videomail_Version']);
  $plugin->plugin_update_check();
  same(1, count($GLOBALS['calls']['update_option']));
  $GLOBALS['options']['NF_Videomail_Version'] = '999.0.0';
  $plugin->plugin_update_check();
  same(1, count($GLOBALS['calls']['update_option']));
});

test_case('license setup tolerates an absent optional updater', function () use ($plugin) {
  $plugin->setup_license();
  same(array(), $GLOBALS['calls']);
});

test_case('merge tags store and return server values', function () {
  $tags = new NF_Videomail_Tags_Merge_Video();
  same('', $tags->alias());
  same('', $tags->url());
  same('', $tags->replyUrl());
  $tags->setAlias('recording');
  $tags->setUrl('https://videomail.io/videomail/recording');
  $tags->setReplyUrl('/reply/recording');
  same('recording', $tags->alias());
  same('https://videomail.io/videomail/recording', $tags->url());
  same('/reply/recording', $tags->replyUrl());
  same('{videomail:url}', $tags->merge_tags['url']['tag']);
});

foreach (array(null, '', 'invalid', array()) as $extra) {
  test_case('ignores missing or malformed submission extra: ' . gettype($extra), function () use ($extra) {
    $field = new NF_Videomail_Fields_Videomail();
    $data = array('extra' => array('videomail' => $extra), 'fields' => array());
    same($data, $field->process(array('id' => 7, 'media_library' => false), $data));
  });
}

test_case('processes a videomail URL and sanitizes merge tag values', function () {
  $field = new NF_Videomail_Fields_Videomail();
  $data = array(
    'extra' => array('videomail' => array(
      'url' => 'https://videomail.io/videomail/example',
      'alias' => '<b>example</b>',
      'replyUrl' => '<i>/reply/example</i>'
    )),
    'fields' => array(7 => array('value' => 'old'), 8 => array('value' => 'untouched'))
  );
  $result = $field->process(array('id' => 7, 'media_library' => false), $data);
  same('https://videomail.io/videomail/example', $result['fields'][7]['value']);
  same('untouched', $result['fields'][8]['value']);
  same('example', Ninja_Forms()->merge_tags['video']->alias());
  same('/reply/example', Ninja_Forms()->merge_tags['video']->replyUrl());
  same(2, count($GLOBALS['calls']['esc_url_raw']));
  same(false, isset($GLOBALS['calls']['download_url']));
});

test_case('handles incomplete server metadata without PHP warnings', function () {
  $field = new NF_Videomail_Fields_Videomail();
  $result = $field->process(array('id' => 7, 'media_library' => false), array(
    'extra' => array('videomail' => array('key' => 'key')),
    'fields' => array(7 => array())
  ));
  same('', $result['fields'][7]['value']);
  same('', Ninja_Forms()->merge_tags['video']->alias());
});

foreach (array('', 'http://videomail.io/video', 'https://videomail.io.evil.test/video',
  'https://evilvideomail.io/video', '/relative/video') as $url) {
  test_case('rejects untrusted download URL: ' . $url, function () use ($url) {
    $field = new NF_Videomail_Fields_Videomail();
    $result = $field->downloadVideomailToMediaLibrary(array('webm' => $url));
    same(true, is_wp_error($result));
    same('invalid_videomail_url', $result->code);
    same(false, isset($GLOBALS['calls']['download_url']));
  });
}

foreach (array(
  array('webm', 'https://videomail.io/video', 'My video', 'My-video.webm'),
  array('mp4', 'https://media.videomail.io/video', '', 'fallback.mp4')
) as $case) {
  test_case('sideloads trusted ' . $case[0] . ' and uses subject or alias', function () use ($case) {
    $temp = tempnam(sys_get_temp_dir(), 'videomail-php-');
    try {
      file_put_contents($temp, 'fake video');
      $GLOBALS['download_result'] = $temp;
      $field = new NF_Videomail_Fields_Videomail();
      $result = $field->downloadVideomailToMediaLibrary(array(
        $case[0] => $case[1], 'subject' => $case[2], 'alias' => 'fallback'
      ));
      same(42, $result);
      same(array($case[1], 300), $GLOBALS['calls']['download_url'][0]);
      $file = $GLOBALS['calls']['media_handle_sideload'][0][0];
      same($case[3], $file['name']);
      same('video/' . $case[0], $file['type']);
      same(10, $file['size']);
    } finally {
      if (file_exists($temp)) unlink($temp);
    }
  });
}

test_case('prefers WebM and propagates download errors without sideloading', function () {
  $error = new WP_Error('download_failed');
  $GLOBALS['download_result'] = $error;
  $field = new NF_Videomail_Fields_Videomail();
  same($error, $field->downloadVideomailToMediaLibrary(array(
    'webm' => 'https://videomail.io/webm', 'mp4' => 'https://videomail.io/mp4'
  )));
  same('https://videomail.io/webm', $GLOBALS['calls']['download_url'][0][0]);
  same(false, isset($GLOBALS['calls']['media_handle_sideload']));
});

test_case('cleans temporary files and propagates sideload errors', function () {
  $temp = tempnam(sys_get_temp_dir(), 'videomail-php-');
  try {
    $error = new WP_Error('sideload_failed');
    $GLOBALS['download_result'] = $temp;
    $GLOBALS['media_result'] = $error;
    $field = new NF_Videomail_Fields_Videomail();
    same($error, $field->downloadVideomailToMediaLibrary(array('mp4' => 'https://videomail.io/video')));
    same(false, file_exists($temp));
  } finally {
    if (file_exists($temp)) unlink($temp);
  }
});

test_case('enqueues versioned assets in dependency order and localizes admin email', function () {
  $GLOBALS['options']['admin_email'] = 'admin@example.test';
  $field = new NF_Videomail_Fields_Videomail();
  $field->enqueueScripts();
  same(NF_Videomail::VERSION, $GLOBALS['calls']['wp_enqueue_style'][0][3]);
  same(NF_Videomail::$jsUrl . 'videomail-client/index-min.js', $GLOBALS['calls']['wp_register_script'][0][1]);
  same(array('nf-front-end', 'nf-videomail-client'), $GLOBALS['calls']['wp_enqueue_script'][0][2]);
  same(NF_Videomail::VERSION, $GLOBALS['calls']['wp_enqueue_script'][0][3]);
  same(array('admin_email' => 'admin@example.test'), $GLOBALS['calls']['wp_localize_script'][0][2]);
});

test_case('submission columns preserve other fields and escape video links', function () {
  $field = new NF_Videomail_Fields_Videomail();
  $other = new class {
    public function get_setting($key) { return 'text'; }
  };
  $video = new class {
    public function get_setting($key) { return 'videomail'; }
  };
  same('original', $field->customColumns('original', $other));
  same('No Video Recorded', $field->customColumns('', $video));
  contains('&quot;', $field->customColumns('https://videomail.io/"test', $video));
  same('No Video Recorded', $field->admin_form_element(7, ''));
  contains('&quot;', rendered(function () use ($field) {
    $field->admin_form_element(7, 'https://videomail.io/"test');
  }));
});

test_case('template lookup handles missing files and cannot overwrite its path', function () {
  same('', rendered(function () { NF_Videomail::template(); }));
  same('', rendered(function () { NF_Videomail::template('missing.php'); }));
  contains('View Online', rendered(function () {
    NF_Videomail::template('../admin-form-element.html.php', array(
      'value' => 'https://videomail.io/video', 'templatePath' => 'missing.php'
    ));
  }));
});

foreach (array(null, array(), array('url' => 'https://videomail.io/video')) as $metadata) {
  test_case('metabox ignores absent alias: ' . json_encode($metadata), function () use ($metadata) {
    $GLOBALS['submission'] = new class($metadata) {
      private $metadata;
      public function __construct($metadata) { $this->metadata = $metadata; }
      public function get_extra_value($key) { return $this->metadata; }
    };
    $metabox = new NF_Videomail_Admin_Metaboxes_Submission();
    same('', rendered(function () use ($metabox) { $metabox->render_metabox(null, null); }));
    if (!$metadata) same('add_meta_boxes', $GLOBALS['calls']['remove_action'][0][0]);
  });
}

test_case('metabox encodes alias, escapes poster and renders both video formats', function () {
  $GLOBALS['submission'] = new class {
    public function get_extra_value($key) {
      return array('alias' => 'a/b c', 'poster' => 'https://videomail.io/"poster');
    }
  };
  $metabox = new NF_Videomail_Admin_Metaboxes_Submission();
  $html = rendered(function () use ($metabox) { $metabox->render_metabox(null, null); });
  contains('a%2Fb%20c/type/webm', $html);
  contains('a%2Fb%20c/type/mp4', $html);
  contains('&quot;poster', $html);
  contains('video/webm', $html);
  contains('video/mp4', $html);
});

echo "\nPHP tests: $passed passed, $failed failed.\n";
exit($failed === 0 ? 0 : 1);
