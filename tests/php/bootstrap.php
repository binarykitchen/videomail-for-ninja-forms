<?php
define('ABSPATH', __DIR__ . '/');

set_error_handler(function ($severity, $message, $file, $line) {
  if (!(error_reporting() & $severity)) return false;
  throw new ErrorException($message, 0, $severity, $file, $line);
});

class NF_Abstracts_Input {}
class NF_Abstracts_Field {
  protected $_nicename;
  public function __construct() {}
}
class NF_Abstracts_MergeTags {
  public $title;
  public $merge_tags;
  public function __construct() {}
}
class NF_Abstracts_SubmissionMetabox {
  public $sub;
  protected $_title;
  public function __construct() {
    $this->sub = $GLOBALS['submission'] ?? null;
  }
}
class WP_Error {
  public $code;
  public function __construct($code, $message = '') {
    $this->code = $code;
  }
}

function reset_environment() {
  $GLOBALS['calls'] = array();
  $GLOBALS['options'] = array();
  $GLOBALS['submission'] = null;
  $GLOBALS['download_result'] = null;
  $GLOBALS['media_result'] = 42;
}
function record_call($name, ...$args) {
  $GLOBALS['calls'][$name][] = $args;
}
function add_action(...$args) { record_call('add_action', ...$args); }
function add_filter(...$args) { record_call('add_filter', ...$args); }
function remove_action(...$args) { record_call('remove_action', ...$args); }
function apply_filters($name, $value) {
  record_call('apply_filters', $name, $value);
  return $value;
}
function __($text, $domain) { return $text; }
function sanitize_text_field($text) { return trim(strip_tags($text)); }
function sanitize_file_name($name) { return str_replace(' ', '-', $name); }
function esc_url_raw($url) {
  record_call('esc_url_raw', $url);
  return strpos($url, 'javascript:') === 0 ? '' : $url;
}
function esc_url($url) { return htmlspecialchars(esc_url_raw($url), ENT_QUOTES, 'UTF-8'); }
function esc_html($text) { return htmlspecialchars($text, ENT_QUOTES, 'UTF-8'); }
function esc_attr($text) { return esc_html($text); }
function esc_html__($text, $domain) { return esc_html($text); }
function esc_html_e($text, $domain) { echo esc_html($text); }
function wp_parse_url($url) { return parse_url($url); }
function is_wp_error($result) { return $result instanceof WP_Error; }
function download_url($url, $timeout) {
  record_call('download_url', $url, $timeout);
  return $GLOBALS['download_result'];
}
function media_handle_sideload($file, $parent, $subject) {
  record_call('media_handle_sideload', $file, $parent, $subject);
  return $GLOBALS['media_result'];
}
function get_option($name, $default = false) { return $GLOBALS['options'][$name] ?? $default; }
function update_option($name, $value) {
  record_call('update_option', $name, $value);
  $GLOBALS['options'][$name] = $value;
}
function plugin_dir_path($file) { return dirname($file) . DIRECTORY_SEPARATOR; }
function wp_enqueue_style(...$args) { record_call('wp_enqueue_style', ...$args); }
function wp_register_script(...$args) { record_call('wp_register_script', ...$args); }
function wp_enqueue_script(...$args) { record_call('wp_enqueue_script', ...$args); }
function wp_localize_script(...$args) { record_call('wp_localize_script', ...$args); }
function Ninja_Forms() { return $GLOBALS['ninja_forms']; }

reset_environment();
$root = dirname(__DIR__, 2);
require $root . '/src/php/videomail.php';
require $root . '/src/php/tags/merge/video.php';
require $root . '/src/php/fields/videomail.php';
require $root . '/src/php/admin/metaboxes/submission.php';
$GLOBALS['ninja_forms'] = (object) array(
  'merge_tags' => array('video' => new NF_Videomail_Tags_Merge_Video())
);
$plugin = NF_Videomail::instance(
  $root . '/videomail-for-ninja-forms.php',
  $root . '/src/',
  'https://example.test/target/'
);
