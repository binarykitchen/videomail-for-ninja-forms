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
    if (empty($data['extra']['videomail']) || !is_array($data['extra']['videomail'])) {
      return $data;
    }

    $videomail = $data['extra']['videomail'];

    $videomailFieldId = $field['id'];

    // now set some merge tag values for the videomail object itself
    Ninja_Forms()->merge_tags['video']->setUrl(esc_url_raw($videomail['url'] ?? ''));
    Ninja_Forms()->merge_tags['video']->setAlias(sanitize_text_field($videomail['alias'] ?? ''));
    Ninja_Forms()->merge_tags['video']->setReplyUrl(sanitize_text_field($videomail['replyUrl'] ?? ''));

    $enableMediaLibrary = $field['media_library'];

    if ($enableMediaLibrary === "true" || $enableMediaLibrary === 1 || $enableMediaLibrary === true) {
      register_shutdown_function(array($this, 'downloadVideomailToMediaLibrary'), $videomail);
    }

    $data['fields'][$videomailFieldId]['value'] = esc_url_raw($videomail['url'] ?? '');

    return $data;
  }

  public function downloadVideomailToMediaLibrary($videomail) {
    $videoUrl = '';
    $videoType = '';

    if (!empty($videomail['webm'])) {
      $videoUrl = $videomail['webm'];
      $videoType = 'webm';
    } else if (!empty($videomail['mp4'])) {
      $videoUrl = $videomail['mp4'];
      $videoType = 'mp4';
    }

    if (!$videoUrl || !$this->isTrustedVideomailUrl($videoUrl)) {
      return new WP_Error(
        'invalid_videomail_url',
        __('The video URL is invalid.', 'videomail-for-ninja-forms')
      );
    }

    if (!function_exists('download_url')) {
      require_once ABSPATH . 'wp-admin/includes/file.php';
    }

    $tempFile = download_url($videoUrl, 300);

    if (is_wp_error($tempFile)) {
      return $tempFile;
    }

    if (!function_exists('media_handle_sideload')) {
      require_once ABSPATH . 'wp-admin/includes/image.php';
      require_once ABSPATH . 'wp-admin/includes/media.php';
    }

    if (empty($videomail['subject'])) {
      // use alias as the subject instead
      $subject = sanitize_text_field($videomail['alias'] ?? 'videomail');
    } else {
      $subject = sanitize_text_field($videomail['subject']);
    }

    // Array based on $_FILE as seen in PHP file uploads
    $file = array(
      'name' => sanitize_file_name($subject . '.' . $videoType),
      'type' => 'video/' . $videoType,
      'tmp_name' => $tempFile,
      'error' => 0,
      'size' => filesize($tempFile),
    );

    // Move the temporary file into the uploads directory
    $results = media_handle_sideload($file, 0, $subject);

    if (is_wp_error($results)) {
      @unlink($tempFile);
    }

    return $results;
  }

  private function isTrustedVideomailUrl($url) {
    $parsedUrl = wp_parse_url($url);

    if (!$parsedUrl || empty($parsedUrl['scheme']) || empty($parsedUrl['host'])) {
      return false;
    }

    $host = strtolower($parsedUrl['host']);

    return 'https' === strtolower($parsedUrl['scheme']) &&
      ('videomail.io' === $host || str_ends_with($host, '.videomail.io'));
  }

  public function admin_form_element($id, $value) {
    if (empty($value)) {
      return __('No Video Recorded', 'videomail-for-ninja-forms');
    }

    NF_Videomail::template('admin-form-element.html.php', compact('value'));
  }

  public function enqueueScripts() {
    wp_enqueue_style(
      'nf-videomail-main',
      NF_Videomail::$cssUrl . 'main-min.css',
      array(),
      NF_Videomail::VERSION
    );

    // WordPress will automatically include the registered script before it includes the
    // enqueued script that lists the registered script’s handle as a dependency.
    wp_register_script(
      'nf-videomail-client',
      NF_Videomail::$jsUrl . 'videomail-client/index-min.js',
      array(),
      NF_Videomail::VERSION
    );

    wp_enqueue_script(
      'nf-videomail-main',
      NF_Videomail::$jsUrl . 'main-min.js',
      // The script nf-front-end is defined by the Ninja Forms plugin and
      // enqueued along with the ("front-end", client-side) form.
      array('nf-front-end', 'nf-videomail-client'),
      NF_Videomail::VERSION
    );

    wp_localize_script('nf-videomail-main', 'nfVideomail', array(
      'admin_email' => get_option('admin_email')
    ));
  }

  public function customColumns($value, $field) {
    if ($this->_name != $field->get_setting('type')) {
      return $value;
    }

    if (empty($value)) {
      return __('No Video Recorded', 'videomail-for-ninja-forms');
    }

    // ok, value is a videomail
    return '<a href="' . esc_url($value) . '">' .
      esc_html__('View Online', 'videomail-for-ninja-forms') .
      '</a>';
  }
}
