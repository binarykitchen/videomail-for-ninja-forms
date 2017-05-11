<?php if (!defined('ABSPATH')) exit;

if (!class_exists( 'NF_Abstracts_Input')) return;

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

    $this->_settings['label']['value'] = __('Video Message', 'ninja-forms-videomail');

    add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
    add_filter('ninja_forms_custom_columns', array($this, 'custom_columns' ), 10, 2);
  }

  public function process ($field, $data) {
    $videomail = $data['extra']['videomail'];

    $videomailFieldId = $field['id'];
    $data['fields'][$videomailFieldId]['value'] = $videomail;

    return $data;
  }

  public function admin_form_element ($id, $value) {
    if (empty($value)) return __('No Video Recorded');

    NF_Videomail::template('admin-form-element.html.php', compact('value'));
  }

  public function enqueue_scripts() {
    wp_enqueue_style(
      'nf-videomail-main',
      NF_Videomail::$cssUrl . 'main.min.css'
    );

    wp_enqueue_script(
      'nf-videomail-client',
      NF_Videomail::$jsUrl . 'videomail-client/videomail-client.min.js',
      false
    );

    wp_enqueue_script(
      'nf-videomail-main',
      NF_Videomail::$jsUrl . 'main.min.js',
      array('nf-front-end', 'nf-videomail-client')
    );
    wp_localize_script( 'nf-videomail-main', 'nfVideomail', array(
        'admin_email' => get_option( 'admin_email' )
    ));
  }

  public function custom_columns ($value, $field) {
    if ($this->_name != $field->get_setting('type')) return $value;

    if (empty($value)) return __('No Video Recorded');

    // ok, value is a videomail
    return '<a href="' . $value['url'] . '">' . __('View Online', 'ninja-forms-videomail') . '</a>';
  }
}
