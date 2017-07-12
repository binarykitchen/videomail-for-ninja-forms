<?php if (!defined('ABSPATH')) exit;

/*
 * Plugin Name: Ninja Forms - Videomail
 * Plugin URI: https://github.com/kjohnson/ninja-forms-videomail
 * Description: Express yourself in more than just words. Record and send a short video from your webcam.
 * Version: 3.3.1
 * Author: Michael Heuberger + Kyle B. Johnson
 * Author URI: https://videomail.io
 * Author URI: http://kylebjohnson.me
 * Text Domain: ninja-forms-videomail
 *
 * Copyright 2017 Michael Heuberger + Kyle B. Johnson
 */

if (version_compare(get_option('ninja_forms_version', '0.0.0'), '3', '<') ||
    get_option('ninja_forms_load_deprecated', FALSE)) {

  return;

} else {
  $dir = plugin_dir_path(__FILE__);
  $url = plugin_dir_url(__FILE__);

  require_once $dir . 'php' . DIRECTORY_SEPARATOR . 'videomail.php';

  NF_Videomail::instance($dir, $url);
}
