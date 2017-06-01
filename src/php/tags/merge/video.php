<?php if (!defined('ABSPATH')) exit;

if (!class_exists('NF_Abstracts_MergeTags')) return;

class NF_Videomail_Tags_Merge_Video extends NF_Abstracts_MergeTags {

  protected $id = 'video';

  public function __construct() {
    parent::__construct();

    $this->title = __('Video Merge Tags', 'ninja-forms');

    $this->merge_tags = array(
      'alias' => array(
        'id' => 'alias',
        'tag' => '{videomail:alias}',
        'label' => __('Alias'),
        'callback' => 'alias'
      )
    );
  }

  // kyle, how do i access the videomail object here?
  // so that i can extract its subject for the {videomail:subject} merge tag.
  //
  // when being processed, it is in $data['extra']['videomail'], see fields/videomail.php
  //
  // thanks!
  //
  public function alias() {
    return 'some alias'; // <-- what to use here??
  }
}
