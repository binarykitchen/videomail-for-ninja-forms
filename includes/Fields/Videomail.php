<?php if ( ! defined( 'ABSPATH' ) ) exit;

if( ! class_exists( 'NF_Abstracts_Input' ) ) return;

/**
 * Class NF_Field_Videomail
 */
class NF_Videomail_Fields_Videomail extends NF_Abstracts_Input
{
    protected $_name = 'videomail';

    protected $_section = 'common';

    protected $_type = 'videomail';

    protected $_icon = 'video-camera';

    protected $_templates = 'videomail';

    public function __construct()
    {
        parent::__construct();

        $this->_nicename = __( 'Videomail', 'ninja-forms' );

        add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
    }

    public function process( $field, $data )
    {
        $data[ 'extra' ][ 'videomail' ][] = array(
            'url' => $field[ 'url' ],
            'webm' => $field[ 'webm' ],
            'mp4' => $field[ 'mp4' ],
            'poster' => $field[ 'poster' ]
        );

        return $data;
    }

    public function admin_form_element( $id, $value )
    {
        NF_Videomail::template( 'admin-form-element.html.php', compact( 'value' ) );
    }

    public function enqueue_scripts()
    {
        wp_enqueue_script( 'nf-videomail-client', NF_Videomail::$url . '/assets/js/videomail-client.min.js', false );
        wp_enqueue_script( 'nf-videomail', NF_Videomail::$url . '/assets/js/videomail.js', array( 'nf-front-end', 'nf-videomail-client' ) );
    }

} // END CLASS NF_Field_Videomail
