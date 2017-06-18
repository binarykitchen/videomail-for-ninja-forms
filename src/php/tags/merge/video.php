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

  public function alias() {
    $this->alias;
  }

  // Call this method to set the value, so that the merge tag has access later.
  // ie Ninja_Forms()->merge_tags[ 'video' ]->set_alias( 'foo' );
  public function set_alias( $alias ) {
    $this->alias = $alias;
  }
}
