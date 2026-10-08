<?php
define('VIDEOMAIL_TEST_STARTUP', true);
require __DIR__ . '/bootstrap.php';

function check_startup($condition, $message) {
  if (!$condition) throw new RuntimeException($message);
}

$pluginRoot = $argv[1];
$scenario = $argv[2];
$GLOBALS['ninja_forms'] = (object) array('merge_tags' => array());

if ($scenario !== 'missing') {
  $GLOBALS['options']['ninja_forms_version'] = $scenario === 'old' ? '2.9.0' : '3.15.5';
}
if ($scenario === 'deprecated') {
  $GLOBALS['options']['ninja_forms_load_deprecated'] = true;
}

require $pluginRoot . '/videomail-for-ninja-forms.php';

if ($scenario !== 'current') {
  check_startup(empty($GLOBALS['calls']['add_filter']), 'Registered fields with an unsupported dependency.');
  echo "PASS unsupported dependency: $scenario\n";
  exit(0);
}

check_startup(class_exists('NF_Videomail', false), 'Plugin entry point did not load its core.');
check_startup(!class_exists('NF_Videomail_Fields_Videomail', false), 'Field was preloaded, bypassing the autoloader.');
check_startup(!class_exists('NF_Videomail_Tags_Merge_Video', false), 'Merge tags were preloaded.');

foreach ($GLOBALS['calls']['add_action'] as $hook) {
  if ($hook[0] === 'ninja_forms_loaded') call_user_func($hook[1]);
}

check_startup(
  Ninja_Forms()->merge_tags['video'] instanceof NF_Videomail_Tags_Merge_Video,
  'Ninja Forms startup did not register video merge tags.'
);

$fields = array('textbox' => 'existing');
foreach ($GLOBALS['calls']['add_filter'] as $hook) {
  if ($hook[0] === 'ninja_forms_register_fields') {
    $fields = call_user_func($hook[1], $fields);
  }
}

$form = json_decode(file_get_contents(dirname(__DIR__, 2) . '/examples/nf_form_video_contact_us.nff'), true, 512, JSON_THROW_ON_ERROR);
$videoFields = array_filter($form['fields'], function ($field) {
  return $field['type'] === 'videomail';
});
check_startup(count($videoFields) === 1, 'Example form must contain one Videomail field.');
foreach ($videoFields as $field) {
  check_startup(
    isset($fields[$field['type']]) && $fields[$field['type']] instanceof NF_Videomail_Fields_Videomail,
    'Field type "' . $field['type'] . '" not found.'
  );
}
check_startup($fields['textbox'] === 'existing', 'Registration replaced an existing field.');
check_startup(
  is_readable(NF_Videomail::$templatesDir . 'fields-videomail.html'),
  'Registered field template is missing.'
);
echo "PASS plugin entry point, autoloading and example form field registration\n";
