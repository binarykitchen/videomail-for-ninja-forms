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

  // URLs in the browser's Videomail payload that we store, show or download
  private const URL_KEYS = array('url', 'replyUrl', 'poster', 'webm', 'mp4', 'vtt');

  // Settings the browser passes on to videomail.io for its emails
  private const EMAIL_SETTINGS = array('email_from', 'email_to', 'email_subject', 'email_body');

  public function __construct () {
    parent::__construct();

    $this->_nicename = __('Videomail', 'ninja-forms');

    $settings = NF_Videomail::config('videomail-field-settings');
    $this->_settings = array_merge($this->_settings, $settings);

    $this->_settings['label']['value'] = __('Video Message', 'videomail-for-ninja-forms');

    // Ninja Forms runs this filter only while it renders a Videomail field. Hooking in here instead
    // of wp_enqueue_scripts keeps the recorder off every other page and form.
    add_filter('ninja_forms_localize_field_settings_' . $this->_type, array($this, 'localizeSettings'));
    add_filter('ninja_forms_custom_columns', array($this, 'customColumns' ), 10, 2);
  }

  public function localizeSettings($settings) {
    $this->enqueueScripts();

    return $this->resolveWordPressMergeTags($settings);
  }

  // {wp:…} tags only exist on the server, so resolve them before the settings reach the browser.
  // This way the admin email only shows up in a page when a form really sends to it.
  private function resolveWordPressMergeTags($settings) {
    $wordPressMergeTags = Ninja_Forms()->merge_tags['wp'] ?? null;

    if (!$wordPressMergeTags) {
      return $settings;
    }

    foreach (self::EMAIL_SETTINGS as $key) {
      if (!empty($settings[$key]) && is_string($settings[$key])) {
        $settings[$key] = $wordPressMergeTags->replace($settings[$key]);
      }
    }

    return $settings;
  }

  // Ninja Forms only checks that the browser sent some field value, and a forged post can send any
  // text. So a required Videomail field also needs a genuine recording in the submission.
  public function validate($field, $data) {
    $errors = parent::validate($field, $data);

    // Ninja Forms' own required check already complained
    if ($errors) {
      return $errors;
    }

    if ($this->isRequired($field) && !$this->getTrustedVideomail($data)) {
      return array(
        'slug' => 'required-error',
        'message' => __('Record and click on stop to see a preview video.', 'videomail-for-ninja-forms'),
      );
    }

    return $errors;
  }

  public function process ($field, $data) {
    $videomail = $this->getTrustedVideomail($data);

    // now set some merge tag values for the videomail object itself, empty without a recording
    Ninja_Forms()->merge_tags['video']->setUrl($videomail['url'] ?? '');
    Ninja_Forms()->merge_tags['video']->setAlias($videomail['alias'] ?? '');
    Ninja_Forms()->merge_tags['video']->setReplyUrl($videomail['replyUrl'] ?? '');

    // Never keep the browser's own field value. It's only a recording key, or any text when forged.
    $data['fields'][$field['id']]['value'] = $videomail['url'] ?? '';

    // Ninja Forms saves this extra data with the submission, so swap in the checked payload
    // (or nothing). The metabox then only ever sees trusted URLs.
    if (isset($data['extra']['videomail'])) {
      $data['extra']['videomail'] = $videomail;
    }

    if ($videomail && $this->isMediaLibraryEnabled($field)) {
      $this->deferMediaLibraryDownload($videomail);
    }

    return $data;
  }

  private function isRequired($field) {
    return 1 === intval($field['required'] ?? 0);
  }

  // Returns the browser's Videomail payload with every URL checked, or null unless it describes a
  // real recording on videomail.io. Anyone can post anything here, so nothing is taken on trust.
  private function getTrustedVideomail($data) {
    $videomail = $data['extra']['videomail'] ?? null;

    if (!is_array($videomail)) {
      return null;
    }

    // videomail.io sends relative reply URLs like "/reply/alias", so anchor them to its origin first
    $videomail['replyUrl'] = $this->getAbsoluteVideomailUrl($videomail['replyUrl'] ?? '');

    foreach (self::URL_KEYS as $key) {
      // Keep trusted URLs only. Anything else, javascript: links included, gets dropped.
      if (NF_Videomail::isTrustedVideomailUrl($videomail[$key] ?? '')) {
        $videomail[$key] = esc_url_raw($videomail[$key]);
      } else {
        unset($videomail[$key]);
      }
    }

    $videomail['alias'] = sanitize_text_field($videomail['alias'] ?? '');
    $videomail['key'] = sanitize_text_field($videomail['key'] ?? '');

    $isRecording = isset($videomail['url']) && '' !== $videomail['alias'] && '' !== $videomail['key'];

    return $isRecording ? $videomail : null;
  }

  // Leaves protocol-relative URLs like "//evil.example" alone, so the trust check rejects them
  private function getAbsoluteVideomailUrl($url) {
    if (is_string($url) && str_starts_with($url, '/') && !str_starts_with($url, '//')) {
      return 'https://videomail.io' . $url;
    }

    return $url;
  }

  // Ninja Forms hands toggles over as true, 1, "1" or "true" (its meta table and imported forms
  // use strings). Forms saved before this option existed, like the bundled example, lack it entirely.
  private function isMediaLibraryEnabled($field) {
    return wp_validate_boolean($field['media_library'] ?? false);
  }

  // Downloads at the end of this request, so the video is saved long before it can expire on
  // videomail.io. Protected, so tests can check the hand-over without a real shutdown download.
  protected function deferMediaLibraryDownload($videomail) {
    register_shutdown_function(array($this, 'downloadVideomailToMediaLibrary'), $videomail);
  }

  public function downloadVideomailToMediaLibrary($videomail) {
    $videoUrl = '';
    $videoType = '';

    // MP4 first: it plays everywhere, including Safari and WordPress' own media player
    if (!empty($videomail['mp4'])) {
      $videoUrl = $videomail['mp4'];
      $videoType = 'mp4';
    } else if (!empty($videomail['webm'])) {
      $videoUrl = $videomail['webm'];
      $videoType = 'webm';
    }

    if (!$videoUrl || !NF_Videomail::isTrustedVideomailUrl($videoUrl)) {
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

  public function admin_form_element($id, $value) {
    if (empty($value)) {
      return __('No Video Recorded', 'videomail-for-ninja-forms');
    }

    NF_Videomail::template('admin-form-element.html.php', compact('value'));
  }

  private function enqueueScripts() {
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
