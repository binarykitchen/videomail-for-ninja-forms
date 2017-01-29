<?php if ( ! defined( 'ABSPATH' ) ) exit;

/*
 * Plugin Name: Ninja Forms - Videomail
 * Plugin URI: https://github.com/kjohnson/ninja-forms-videomail
 * Description: Express yourself in more than just words. Record and send a short video from your webcam.
 * Version: 3.1.6
 * Author: Michael Heuberger + Kyle B. Johnson
 * Author URI: https://videomail.io
 * Author URI: http://kylebjohnson.me
 * Text Domain: ninja-forms-videomail
 *
 * Copyright 2017 Michael Heuberger + Kyle B. Johnson
 */

if( version_compare( get_option( 'ninja_forms_version', '0.0.0' ), '3', '<' ) || get_option( 'ninja_forms_load_deprecated', FALSE ) ) {

    return;

} else {

    /**
     * Class NF_Videomail
     */
    final class NF_Videomail
    {
        const VERSION = '3.1.6';
        const SLUG    = 'videomail';
        const NAME    = 'Videomail';
        const AUTHOR  = 'Michael Heuberger + Kyle B. Johnson';
        const PREFIX  = 'NF_Videomail';

        /**
         * @var NF_Videomail
         * @since 3.0
         */
        private static $instance;

        /**
         * Plugin Directory
         *
         * @since 3.0
         * @var string $dir
         */
        public static $dir = '';

        /**
         * Plugin URL
         *
         * @since 3.0
         * @var string $url
         */
        public static $url = '';

        /**
         * Main Plugin Instance
         *
         * Insures that only one instance of a plugin class exists in memory at any one
         * time. Also prevents needing to define globals all over the place.
         *
         * @since 3.0
         * @static
         * @static var array $instance
         * @return NF_Videomail Highlander Instance
         */
        public static function instance()
        {
            if (!isset(self::$instance) && !(self::$instance instanceof NF_Videomail)) {
                self::$instance = new NF_Videomail();
                self::$dir = plugin_dir_path(__FILE__);
                self::$url = plugin_dir_url(__FILE__);
                spl_autoload_register(array(self::$instance, 'autoloader'));
            }
            return self::$instance;
        }

        /**
         * NF_Videomail constructor
         */
        public function __construct()
        {
            add_action('ninja_forms_loaded', array($this, 'ninja_forms_loaded'));
            add_filter('ninja_forms_register_fields', array($this, 'register_fields'));
            add_filter('ninja_forms_register_actions', array($this, 'register_actions'));
            add_filter('ninja_forms_field_template_file_paths', array($this, 'custom_template_path'));
        }

        public function ninja_forms_loaded()
        {
            new NF_Videomail_Admin_Metaboxes_Submission();
        }

        /**
         * Register Fields
         *
         * @hook ninja_forms_register_fields
         * @param $actions
         * @return mixed
         */
        public function register_fields($actions)
        {
            $actions[ 'videomail' ] = new NF_Videomail_Fields_Videomail();

            return $actions;
        }

        /**
         * Register Actions
         *
         * @hook ninja_forms_register_actions
         * @param $actions
         * @return mixed
         */
        public function register_actions($actions)
        {
            // This section intentionally left blank.

            return $actions;
        }

        public function custom_template_path( $paths )
        {
            $paths[] = NF_Videomail::$dir . '/includes/Templates/';

            return $paths;
        }

        /**
         * Autoloader
         *
         * @param $class_name
         */
        public function autoloader($class_name)
        {
            if (class_exists($class_name)) return;

            if ( false === strpos( $class_name, self::PREFIX ) ) return;

            $class_name = str_replace( self::PREFIX, '', $class_name );
            $classes_dir = realpath(plugin_dir_path(__FILE__)) . DIRECTORY_SEPARATOR . 'includes' . DIRECTORY_SEPARATOR;
            $class_file = str_replace('_', DIRECTORY_SEPARATOR, $class_name) . '.php';

            if (file_exists($classes_dir . $class_file)) {
                require_once $classes_dir . $class_file;
            }
        }

        /**
         * Template
         *
         * @param string $file_name
         * @param array $data
         */
        public static function template( $file_name = '', array $data = array() )
        {
            if( ! $file_name ) return;

            extract( $data );

            include self::$dir . 'includes/Templates/' . $file_name;
        }

        /**
         * Config
         *
         * @param $file_name
         * @return mixed
         */
        public static function config( $file_name )
        {
            return include self::$dir . 'includes/Config/' . $file_name . '.php';
        }
    }

    /**
     * The main function responsible for returning The Highlander Plugin
     * Instance to functions everywhere.
     *
     * Use this function like you would a global variable, except without needing
     * to declare the global.
     *
     * @since 3.0
     * @return {class} Highlander Instance
     */
    function NF_Videomail()
    {
        return NF_Videomail::instance();
    }

    NF_Videomail();
}
