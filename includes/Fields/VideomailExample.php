<?php if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Class NF_Field_VideomailExample
 */
class NF_Videomail_Fields_VideomailExample extends NF_Fields_Textbox
{
    protected $_name = 'videomail';

    protected $_section = 'common';

    protected $_type = 'textbox';

    protected $_templates = 'textbox';

    public function __construct()
    {
        parent::__construct();

        $this->_nicename = __( 'Videomail Example Field', 'ninja-forms' );
    }
}