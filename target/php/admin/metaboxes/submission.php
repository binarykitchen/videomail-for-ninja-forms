<?php if (!defined('ABSPATH')) exit;

if (!class_exists('NF_Abstracts_SubmissionMetabox')) return;

final class NF_Videomail_Admin_Metaboxes_Submission extends NF_Abstracts_SubmissionMetabox {

  public function __construct() {
    parent::__construct();

    $this->_title = __('Videomail', 'videomail-for-ninja-forms');

    if ($this->sub && ! $this->sub->get_extra_value( 'videomail')) {
      remove_action('add_meta_boxes', array($this, 'add_meta_boxes'));
    }
  }

  public function render_metabox($post, $metabox) {
    $videomail = $this->sub->get_extra_value('videomail');
    if (!is_array($videomail) || empty($videomail['alias'])) {
      return;
    }

    $alias = rawurlencode(sanitize_text_field($videomail['alias']));
    $poster = $videomail['poster'] ?? '';
    $captions = $videomail['vtt'] ?? '';

    $data = array(
      // Submissions saved before the server-side checks may hold any poster URL from the browser
      'poster' => NF_Videomail::isTrustedVideomailUrl($poster) ? $poster : '',
      // Captions for spoken videomails, so Deaf admins can follow them as well
      'captions' => NF_Videomail::isTrustedVideomailUrl($captions) ? $captions : '',
      // MP4 first: browsers pick the first source they can play, and MP4 plays everywhere
      'source' => array(
        'video/mp4'  => 'https://videomail.io/videomail/' . $alias . '/type/mp4',
        'video/webm' => 'https://videomail.io/videomail/' . $alias . '/type/webm',
      ),
      'text' => array(
        'download' => __('Download', 'videomail-for-ninja-forms'),
        'captions' => __('Captions', 'videomail-for-ninja-forms'),
        'unsupported' => __('Your browser does not support the video tag.', 'videomail-for-ninja-forms'),
      )
    );

    NF_Videomail::template('admin-metabox-submission.html.php', $data);
  }
}
