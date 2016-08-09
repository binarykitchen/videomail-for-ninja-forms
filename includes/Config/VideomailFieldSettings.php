<?php

// todo add new option to switch on/off audio

return apply_filters( 'ninja_forms_videomail_field_settings', array(

    // SITE NAME

    'site_name' => array(
        'name' => 'site_name',
        'type' => 'textbox',
        'label' => __( 'Site Name ID', 'ninja-forms-videomail' ),
        'width' => 'full',
        'group' => 'primary',
        'value' => 'videomail-client-demo',
        'help' => __( 'A valid site-name ID must be registered with the developer at www.videomail.io. The default one, videomail-client-demo, always works for local development/testing.', 'ninja-forms-videomail' ),
    ),

    // LIMIT SECONDS

    'limit_seconds' => array(
        'name' => 'limit_seconds',
        'type' => 'number',
        'label' => __( 'Limit Recording (in Seconds)', 'ninja-forms-videomail' ),
        'width' => 'full',
        'group' => 'restrictions',
        'value' => 80,
    ),

    // AUDIO ENABLED

    'audio_enabled' => array(
        'name' => 'audio_enabled',
        'type' => 'toggle',
        'label' => __( 'Enable Audio (in Beta)', 'ninja-forms-videomail' ),
        'width' => 'full',
        'group' => 'restrictions',
        'value' => FALSE,
        'help' => __('The audio fetaure is in beta and needs feedback for improvement. Otherwise leave it disabled and stick to Sign Language, grins'),
    ),

    // SHOW COUNTDOWN

    'countdown' => array(
        'name' => 'countdown',
        'type' => 'number',
        'label' => __( 'Countdown Time', 'ninja-forms-videomail' ),
        'width' => 'full',
        'group' => 'display',
        'value' => 3,
    ),

    // VIDEO WIDTH

    'width' => array(
        'name' => 'width',
        'type' => 'number',
        'label' => __( 'Video Width', 'ninja-forms-videomail' ),
        'width' => 'full',
        'group' => 'display',
        'value' => 320,
    ),

    // DEBUG MODE

    'verbose' => array(
        'name' => 'verbose',
        'type' => 'toggle',
        'label' => __( 'Debug Mode', 'ninja-forms-videomail' ),
        'width' => 'full',
        'group' => 'advanced',
        'value' => FALSE,
        'help' => __( 'Show verbose comments in the developer console.', 'ninja-forms-videomail' ),
    )
));
