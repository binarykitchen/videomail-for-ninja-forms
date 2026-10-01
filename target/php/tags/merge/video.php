<?php if (!defined('ABSPATH')) exit;

if (!class_exists('NF_Abstracts_MergeTags')) return;

class NF_Videomail_Tags_Merge_Video extends NF_Abstracts_MergeTags {

  protected $id = 'video';
  protected $alias = '';
  protected $url = '';
  protected $replyUrl = '';

  public function __construct() {
    parent::__construct();

    $this->title = __('Videomail', 'ninja-forms');

    $this->merge_tags = array(
      'alias' => array(
        'id' => 'alias',
        'tag' => '{videomail:alias}',
        'label' => __('Alias', 'videomail-for-ninja-forms'),
        'callback' => 'alias'
      ),
      'url' => array(
        'id' => 'url',
        'tag' => '{videomail:url}',
        'label' => __('URL', 'videomail-for-ninja-forms'),
        'callback' => 'url'
      ),
      'replyUrl' => array(
        'id' => 'replyUrl',
        'tag' => '{videomail:replyUrl}',
        'label' => __('Reply URL', 'videomail-for-ninja-forms'),
        'callback' => 'replyUrl'
      )
    );
  }

  public function alias() {
    return $this->alias;
  }

  public function setAlias($alias) {
    $this->alias = $alias;
  }

  public function url() {
    return $this->url;
  }

  public function setUrl($url) {
    $this->url = $url;
  }

  public function replyUrl() {
    return $this->replyUrl;
  }

  public function setReplyUrl($replyUrl) {
    $this->replyUrl = $replyUrl;
  }
}
