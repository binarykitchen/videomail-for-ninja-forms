<?php if (!defined('ABSPATH')) exit;

if (!class_exists( 'NF_Abstracts_Input')) return;

// example var_export($videomail) listing all attributes it has:
//
// array (
//   'recordingStats' =>
//   array (
//     'avgFps' => 15.151515151515152,
//     'wantedFps' => 15,
//     'avgInterval' => 66.959999999999994,
//     'wantedInterval' => 66.666666666666671,
//     'intervalSum' => 5022,
//     'framesCount' => 75,
//     'videoType' => 'webm',
//     'samplesCount' => 215,
//     'sampleRate' => 44100,
//     'waitingTime' => 3993,
//   ),
//   'width' => 320,
//   'height' => 240,
//   'from' => 'mick@deafzone.ch',
//   'to' => 'michael.heuberger@binarykitchen.com',
//   'subject' => 'sdfsdf',
//   'body' => 'sdfsdf',
//   'siteName' => 'videomail-for-ninja-forms-local',
//   'alias' => 'sdfsdf-678717118615',
//   'dateCreated' => 1496456989820,
//   'url' => 'https://videomail.io/videomail/sdfsdf-678717118615',
//   'key' => '11e7-4804-77e7f9d0-97a7-a52eec3dd79e',
//   'expirationPretty' => '1 hour',
//   'expiresAfter' => 1496460589820,
//   'siteTitle' => 'Nina Forms Videomail Example',
//   'webm' => 'https://videomail.io/videomail/sdfsdf-678717118615/type/webm/',
//   'poster' => 'https://videomail.io/videomail/sdfsdf-678717118615/poster/',
//   'reply' =>
//   array (
//     'parentKey' => '11e7-4804-77e7f9d0-97a7-a52eec3dd79e',
//     'subject' => 'RE: sdfsdf',
//     'to' =>
//     array (
//       0 => 'mick@deafzone.ch',
//     ),
//   ),
//   'replyUrl' => '/reply/sdfsdf-678717118615',
//   'correctUrl' => 'https://videomail.io/correct/sdfsdf-678717118615',
//   'dateCreatedPretty' => 'Jun 3, 2017, 2:29 PM',
//   'expiresAfterPretty' => 'Jun 3, 2017, 3:29 PM',
// )

class NF_Videomail_Fields_Videomail extends NF_Abstracts_Field {

  protected $_name = 'videomail';
  protected $_section = 'common';
  protected $_type = 'videomail';
  protected $_icon = 'video-camera';
  protected $_templates = 'videomail';
  protected $_settings = array('label', 'label_pos', 'required', 'key');

  public function __construct () {
    parent::__construct();

    $this->_nicename = __('Videomail', 'ninja-forms');

    $settings = NF_Videomail::config('videomail-field-settings');
    $this->_settings = array_merge($this->_settings, $settings);

    $this->_settings['label']['value'] = __('Video Message', 'videomail-for-ninja-forms');

    add_action('wp_enqueue_scripts', array($this, 'enqueueScripts'));
    add_filter('ninja_forms_custom_columns', array($this, 'customColumns' ), 10, 2);
  }

  public function process ($field, $data) {
    $videomail = $data['extra']['videomail'];

    $videomailFieldId = $field['id'];

    // now set some merge tag values for the videomail object itself
    Ninja_Forms()->merge_tags['video']->setUrl($videomail['url']);
    Ninja_Forms()->merge_tags['video']->setAlias($videomail['alias']);
    Ninja_Forms()->merge_tags['video']->setReplyUrl($videomail['replyUrl']);

    $enableMediaLibrary = $field['media_library'];

    if ($enableMediaLibrary === "true" || $enableMediaLibrary === 1 || $enableMediaLibrary === true) {
      register_shutdown_function(array($this, 'downloadVideomailToMediaLibrary'), $videomail);
    }

    $data['fields'][$videomailFieldId]['value'] = $videomail['url'];

    return $data;
  }

  public function downloadVideomailToMediaLibrary($videomail) {
    if ($videomail['webm']) {
      $videoUrl = $videomail['webm'];
    } else if ($videomail['mp4']) {
      $videoUrl = $videomail['mp4'];
    }

    if ($videoUrl) {
      $tempFile = download_url($videoUrl, 300);

      if (is_wp_error($tempFile)) {
        @unlink($tempFile);
        return $tempFile;
      } else {
        // Need to require these files
        if (!function_exists('media_handle_upload')) {
          require_once(ABSPATH . "wp-admin" . '/includes/image.php');
          require_once(ABSPATH . "wp-admin" . '/includes/file.php');
          require_once(ABSPATH . "wp-admin" . '/includes/media.php');
        }

        $videoType = $videomail['recordingStats']['videoType'];

        if (!$videomail['subject']) {
          // use alias as the subject instead
          $subject = $videomail['alias'];
        } else {
          $subject = $videomail['subject'];
        }

        // Array based on $_FILE as seen in PHP file uploads
        $file = array(
          'name' => $subject . '.' . $videoType,
          'type' => wp_check_filetype($tempFile),
          'tmp_name' => $tempFile,
          'error' => 0,
          'size' => filesize($tempFile),
        );

        // Move the temporary file into the uploads directory
        $results = media_handle_sideload($file, 0, $subject);

        // If error storing permanently, unlink
        if (is_wp_error($results)) {
          @unlink($tempFile);
          return $results;
      	}
      }
    }
  }

  public function admin_form_element($id, $value) {
    if (empty($value)) return __('No Video Recorded');

    NF_Videomail::template('admin-form-element.html.php', compact('value'));
  }

  public function enqueueScripts() {
    wp_enqueue_style(
      'nf-videomail-main',
      NF_Videomail::$cssUrl . 'main.min.css',
      array(),
      NF_Videomail::VERSION
    );

    wp_enqueue_script(
      'nf-videomail-client',
      NF_Videomail::$jsUrl . 'videomail-client/index.cjs',
      array(),
      NF_Videomail::VERSION
    );

    wp_enqueue_script(
      'nf-videomail-main',
      NF_Videomail::$jsUrl . 'main.min.js',
      array('nf-front-end', 'nf-videomail-client'),
      NF_Videomail::VERSION
    );

    wp_localize_script('nf-videomail-main', 'nfVideomail', array(
      'admin_email' => get_option('admin_email')
    ));
  }

  public function customColumns($value, $field) {
    if ($this->_name != $field->get_setting('type')) return $value;

    if (empty($value)) return __('No Video Recorded');

    // ok, value is a videomail
    return '<a href="' . $value . '">' . __('View Online', 'videomail-for-ninja-forms') . '</a>';
  }
}
