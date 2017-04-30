<?php if ( ! defined( 'ABSPATH' ) ) exit;

if( ! class_exists( 'NF_Abstracts_Input' ) ) return;

/**
 * Class NF_Field_Videomail
 */
class NF_Videomail_Fields_Videomail extends NF_Abstracts_Field
{
    protected $_name = 'videomail';

    protected $_section = 'common';

    protected $_type = 'videomail';

    protected $_icon = 'video-camera';

    protected $_templates = 'videomail';

    protected $_settings = array( 'label', 'label_pos', 'required', 'key' );

    public function __construct()
    {
        parent::__construct();

        $this->_nicename = __( 'Videomail', 'ninja-forms' );

        $settings = NF_Videomail::config( 'VideomailFieldSettings' );
        $this->_settings = array_merge( $this->_settings, $settings );

        $this->_settings[ 'label' ][ 'value' ] = __( 'Video Message', 'ninja-forms-videomail' );

        add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );

        add_filter( 'ninja_forms_custom_columns', array( $this, 'custom_columns' ), 10, 2 );
    }

    public function process( $field, $data )
    {
        $generatedVideomail = $data['extra']['generatedVideomail'];

        $videomailFieldId = $field['id'];
        $data['fields'][$videomailFieldId]['value'] = $generatedVideomail;


        // $data['videomail'] = $generatedVideomail;
        //
        // $data[ 'extra' ][ 'videomail' ][] = array(
        //     'url' => $field[ 'url' ],
        //     'webm' => $field[ 'webm' ],
        //     'mp4' => $field[ 'mp4' ],
        //     'poster' => $field[ 'poster' ],
        //     'alias' => $field[ 'alias' ],
        //     'key' => $field[ 'key' ]
        // );

        return $data;
    }

    public function admin_form_element( $id, $value )
    {
        // var_export ('id=' . $id);
        // var_export ('value=' . $value);
        echo("admin_form_element");
        var_dump($id);
        var_dump($value);

        if( empty( $value ) ) return __( 'No Video Recorded' );

        NF_Videomail::template( 'admin-form-element.html.php', compact( 'value' ) );
    }

    public function enqueue_scripts()
    {
        $dev = true; // ( defined( 'NF_DEV' ) && NF_DEV );

        wp_enqueue_style(
            'nf-videomail-main',
            NF_Videomail::$url . 'assets/css/min/main.min.css'
        );

        $videomail_client = ( $dev ) ? 'videomail-client.js' : 'min/videomail-client.min.js';

        wp_enqueue_script(
            'nf-videomail-client',
            NF_Videomail::$url . 'libs/videomail-client/' . $videomail_client,
            false
        );

        $videomail_main = ( $dev ) ? 'main.js' : 'min/main.min.js';

        wp_enqueue_script(
            'nf-videomail-main',
            NF_Videomail::$url . 'assets/js/' . $videomail_main,
            array('nf-front-end', 'nf-videomail-client')
        );
    }

    public function custom_columns( $value, $field )
    {
        echo("custom_columns");
        var_export ($value);
        var_export ($field);

        if ($this->_name != $field->get_setting('type')) return $value;

        if (empty($value)) return __('No Video Recorded');

        return '<a href="' . $value . '">' . __('View Online', 'ninja-forms-videomail') . '</a>';
    }

} // END CLASS NF_Field_Videomail
