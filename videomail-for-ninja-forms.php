<?php
/*
Plugin Name: Videomail for Ninja Forms
Plugin URI: https://github.com/binarykitchen/videomail-for-ninja-forms
Description: Express yourself in more than just words. Record and send a short video from your webcam.
Version: 3.7.0
Author: Michael Heuberger + Kyle B. Johnson
Author URI: https://videomail.io
Author URI: http://kylebjohnson.me
Text Domain: videomail-for-ninja-forms

Copyright 2018 Michael Heuberger + Kyle B. Johnson
*/

if (version_compare(get_option('ninja_forms_version', '0.0.0'), '3', '<') ||
    get_option('ninja_forms_load_deprecated', FALSE)) {

  return;

} else {
  $entryFile = __FILE__;

  $targetDir = plugin_dir_path($entryFile) . 'target' . DIRECTORY_SEPARATOR;
  $url = plugin_dir_url($entryFile) . 'target' . DIRECTORY_SEPARATOR;

  require_once $targetDir . 'php' . DIRECTORY_SEPARATOR . 'videomail.php';

  NF_Videomail::instance(
    $entryFile,
    $targetDir,
    $url
  );
}
