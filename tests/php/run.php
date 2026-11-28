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
  same(2, count($GLOBALS['calls']['add_action']));
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
  same(false, $settings['media_library']['value']);
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

// WordPress.org delivers updates; Ninja Forms' commercial updater must never be wired up again
test_case('never registers with the Ninja Forms licence updater', function () {
  new NF_Videomail();
  same(false, in_array('admin_init', array_column($GLOBALS['calls']['add_action'], 0), true));
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

// A complete recording as videomail.io hands it to the browser after the upload
function recording($overrides = array()) {
  return $overrides + array(
    'url' => 'https://videomail.io/videomail/example', 'alias' => 'example', 'key' => 'key-1'
  );
}

foreach (array(null, '', 'invalid', array()) as $extra) {
  test_case('blanks the field without a usable recording: ' . gettype($extra), function () use ($extra) {
    $field = new NF_Videomail_Fields_Videomail();
    $result = $field->process(array('id' => 7), array(
      'extra' => array('videomail' => $extra),
      'fields' => array(7 => array('value' => 'any text from the browser'))
    ));
    same('', $result['fields'][7]['value']);
    same(null, $result['extra']['videomail']);
    same('', Ninja_Forms()->merge_tags['video']->url());
  });
}

test_case('processes a recording and keeps only checked, sanitised values', function () {
  $field = new NF_Videomail_Fields_Videomail();
  $result = $field->process(array('id' => 7), array(
    'extra' => array('videomail' => recording(array(
      'alias' => '<b>example</b>',
      'replyUrl' => '/reply/example',
      'poster' => 'https://videomail.io/videomail/example/poster',
      'subject' => 'Hello'
    ))),
    'fields' => array(7 => array('value' => 'key-1'), 8 => array('value' => 'untouched'))
  ));
  same('https://videomail.io/videomail/example', $result['fields'][7]['value']);
  same('untouched', $result['fields'][8]['value']);
  same('example', Ninja_Forms()->merge_tags['video']->alias());
  same('https://videomail.io/reply/example', Ninja_Forms()->merge_tags['video']->replyUrl());
  same('https://videomail.io/videomail/example/poster', $result['extra']['videomail']['poster']);
  same('Hello', $result['extra']['videomail']['subject']);
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

foreach (array('https://evil.example/phish', 'javascript:alert(1)', array('https://videomail.io/x')) as $url) {
  test_case('rejects a forged recording URL: ' . json_encode($url), function () use ($url) {
    $field = new NF_Videomail_Fields_Videomail();
    $result = $field->process(array('id' => 7), array(
      'extra' => array('videomail' => recording(array('url' => $url))),
      'fields' => array(7 => array('value' => 'key-1'))
    ));
    same('', $result['fields'][7]['value']);
    same('', Ninja_Forms()->merge_tags['video']->url());
  });
}

test_case('drops forged reply, poster and video URLs from a real recording', function () {
  $field = new NF_Videomail_Fields_Videomail();
  $result = $field->process(array('id' => 7), array(
    'extra' => array('videomail' => recording(array(
      'replyUrl' => 'javascript:alert(1)',
      'poster' => 'https://evil.example/pixel.png',
      'mp4' => 'http://videomail.io/insecure.mp4',
      'webm' => '//evil.example/video.webm'
    ))),
    'fields' => array(7 => array())
  ));
  same('https://videomail.io/videomail/example', $result['fields'][7]['value']);
  same('', Ninja_Forms()->merge_tags['video']->replyUrl());
  foreach (array('replyUrl', 'poster', 'mp4', 'webm') as $key) {
    same(false, isset($result['extra']['videomail'][$key]));
  }
});

test_case('required Videomail fields need a real recording, not just any value', function () {
  $field = new NF_Videomail_Fields_Videomail();
  $required = array('id' => 7, 'required' => '1', 'value' => 'any text from the browser');
  same('required-error', $field->validate($required, array('extra' => array()))['slug']);
  same('required-error', $field->validate($required, array(
    'extra' => array('videomail' => recording(array('url' => 'https://evil.example/phish')))
  ))['slug']);
  same(array(), $field->validate($required, array('extra' => array('videomail' => recording()))));
});

test_case('optional Videomail fields pass without a recording', function () {
  $field = new NF_Videomail_Fields_Videomail();
  same(array(), $field->validate(array('id' => 7, 'value' => ''), array('extra' => array())));
});

test_case("Ninja Forms' own required check runs first", function () {
  $field = new NF_Videomail_Fields_Videomail();
  $errors = $field->validate(array('id' => 7, 'required' => 1, 'value' => ''), array());
  same('This field is required.', $errors['message']);
});

// Records media library hand-overs instead of registering a real shutdown download
function media_library_spy() {
  return new class extends NF_Videomail_Fields_Videomail {
    public $deferred = array();
    protected function deferMediaLibraryDownload($videomail) {
      $this->deferred[] = $videomail;
    }
  };
}

function process_with_media_library($field, $settings) {
  $field->process($settings + array('id' => 7), array(
    'extra' => array('videomail' => recording()),
    'fields' => array(7 => array())
  ));
  return count($field->deferred);
}

foreach (array(
  'true' => array(true, 1), '1' => array(1, 1), '"1"' => array('1', 1), '"true"' => array('true', 1),
  'false' => array(false, 0), '0' => array(0, 0), '"0"' => array('0', 0), '"false"' => array('false', 0)
) as $label => $case) {
  test_case('media library toggle ' . $label . ($case[1] ? ' saves the video' : ' skips it'), function () use ($case) {
    same($case[1], process_with_media_library(media_library_spy(), array('media_library' => $case[0])));
  });
}

test_case('media library stays off when older forms lack the setting', function () {
  same(0, process_with_media_library(media_library_spy(), array()));
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

test_case('prefers MP4 and propagates download errors without sideloading', function () {
  $error = new WP_Error('download_failed');
  $GLOBALS['download_result'] = $error;
  $field = new NF_Videomail_Fields_Videomail();
  same($error, $field->downloadVideomailToMediaLibrary(array(
    'webm' => 'https://videomail.io/webm', 'mp4' => 'https://videomail.io/mp4'
  )));
  same('https://videomail.io/mp4', $GLOBALS['calls']['download_url'][0][0]);
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

// The callback the code under test hooked into a WordPress filter
function registered_filter($name) {
  foreach ($GLOBALS['calls']['add_filter'] ?? array() as $call) {
    if ($call[0] === $name) return $call[1];
  }
  return null;
}

test_case('loads assets only while Ninja Forms renders a Videomail field', function () {
  $field = new NF_Videomail_Fields_Videomail();
  // Every request builds the field, so pages without a Videomail field must stay untouched
  same(false, in_array('wp_enqueue_scripts', array_column($GLOBALS['calls']['add_action'] ?? array(), 0), true));
  same(false, isset($GLOBALS['calls']['wp_enqueue_style']));
  $localize = registered_filter('ninja_forms_localize_field_settings_videomail');
  same(array('label' => 'Video'), call_user_func($localize, array('label' => 'Video')));
  same(NF_Videomail::VERSION, $GLOBALS['calls']['wp_enqueue_style'][0][3]);
  same(NF_Videomail::$jsUrl . 'videomail-client/index-min.js', $GLOBALS['calls']['wp_register_script'][0][1]);
  same(array('nf-front-end', 'nf-videomail-client'), $GLOBALS['calls']['wp_enqueue_script'][0][2]);
  same(NF_Videomail::VERSION, $GLOBALS['calls']['wp_enqueue_script'][0][3]);
  same(false, isset($GLOBALS['calls']['wp_localize_script']));
});

test_case('resolves WordPress merge tags on the server and leaves field tags to the browser', function () {
  $ninjaForms = Ninja_Forms();
  $ninjaForms->merge_tags['wp'] = new class {
    public function replace($subject) {
      return str_replace('{wp:admin_email}', 'admin@example.test', $subject);
    }
  };
  try {
    $field = new NF_Videomail_Fields_Videomail();
    $settings = $field->localizeSettings(array(
      'email_to' => 'Admin <{wp:admin_email}>',
      'email_subject' => 'Video from {field:name}',
      'email_body' => '',
      'label' => '{wp:admin_email}'
    ));
    same('Admin <admin@example.test>', $settings['email_to']);
    same('Video from {field:name}', $settings['email_subject']);
    same('', $settings['email_body']);
    same('{wp:admin_email}', $settings['label']);
  } finally {
    unset($ninjaForms->merge_tags['wp']);
  }
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

test_case('metabox hides posters of older submissions that are not on videomail.io', function () {
  $GLOBALS['submission'] = new class {
    public function get_extra_value($key) {
      return array('alias' => 'example', 'poster' => 'https://evil.example/pixel.png');
    }
  };
  $metabox = new NF_Videomail_Admin_Metaboxes_Submission();
  $html = rendered(function () use ($metabox) { $metabox->render_metabox(null, null); });
  same(false, strpos($html, 'evil.example'));
  contains('example/type/mp4', $html);
});

echo "\nPHP tests: $passed passed, $failed failed.\n";
exit($failed === 0 ? 0 : 1);
