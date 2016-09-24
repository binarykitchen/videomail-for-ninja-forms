<?php if (!defined('ABSPATH')) exit;

if (!class_exists('NF_Abstracts_SubmissionMetabox')) return;

final class NF_Videomail_Admin_Metaboxes_Submission extends NF_Abstracts_SubmissionMetabox
{
    public function __construct()
    {
        parent::__construct();

        $this->_title = __('Videomail', 'ninja-forms-videomail');

        if ($this->sub && ! $this->sub->get_extra_value( 'videomail')) {
            remove_action('add_meta_boxes', array($this, 'add_meta_boxes'));
        }
    }

    public function render_metabox($post, $metabox)
    {
        $videomail = $this->sub->get_extra_value('videomail');

        foreach ($videomail as $item) {
            $data = array(
                'poster' => $item['poster'],
                'source' => array(
                    'video/webm' => 'https://videomail.io/videomail/' . $item['alias'] . '/type/webm',
                    'video/mp4'  => 'https://videomail.io/videomail/' . $item['alias'] . '/type/mp4',
                ),
                'text' => array(
                    'download' => __('Download', 'ninja-forms-videomail')
                )
            );

            NF_Videomail::template('admin-metabox-submission.html.php', $data);
        }
    }
}
