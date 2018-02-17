<?php

return apply_filters('ninja_forms_videomail_field_settings', array(

  'media_library' => array(
		'name'  => 'media_library',
		'type'  => 'toggle',
		'value' => 'false',
		'label' => __('Save to Media Library', 'ninja-forms-videomail'),
		'group' => 'primary',
		'width' => 'one-half',
		'help'  => __('Save to Media Library.', 'ninja-forms-videomail'),
	),

  'site_name' => array(
    'name' => 'site_name',
    'type' => 'textbox',
    'label' => __('Site Name ID', 'ninja-forms-videomail'),
    'width' => 'full',
    'group' => 'primary',
    'value' => 'ninja-forms-videomail-local',
    'help' => __('A valid site-name ID must be registered with the developer at www.videomail.io. The default one, ninja-forms-videomail-local, always works for local development/testing.', 'ninja-forms-videomail')
  ),

  'email_from' => array(
    'name' => 'email_from',
    'type' => 'textbox',
    'group' => 'primary',
    'label' => __('From', 'ninja-forms-videomail'),
    'placeholder' => __('Email address or search for a field', 'ninja-forms-videomail'),
    'value' => '',
    'width' => 'full',
    'use_merge_tags' => TRUE
  ),

  'email_to' => array(
    'name' => 'email_to',
    'type' => 'textbox',
    'group' => 'primary',
    'label' => __('To', 'ninja-forms-videomail'),
    'placeholder' => __('Email address or search for a field', 'ninja-forms-videomail'),
    'value' => '',
    'width' => 'full',
    'use_merge_tags' => TRUE
  ),

  'email_subject' => array(
    'name' => 'email_subject',
    'type' => 'textbox',
    'group' => 'primary',
    'label' => __('Subject', 'ninja-forms-videomail'),
    'placeholder' => __('Subject Text or search for a field', 'ninja-forms-videomail'),
    'value' => '',
    'width' => 'full',
    'use_merge_tags' => TRUE
  ),

  'email_body' => array(
    'name' => 'email_body',
    'type' => 'textbox',
    'group' => 'primary',
    'label' => __('Body', 'ninja-forms-videomail'),
    'placeholder' => __('Body Text or search for a field', 'ninja-forms-videomail'),
    'value' => '',
    'width' => 'full',
    'use_merge_tags' => TRUE
  ),

  'limit_seconds' => array(
    'name' => 'limit_seconds',
    'type' => 'number',
    'label' => __('Limit Recording (in Seconds)', 'ninja-forms-videomail'),
    'width' => 'one-half',
    'group' => 'restrictions',
    'value' => 80
  ),

  'audio_enabled' => array(
    'name' => 'audio_enabled',
    'type' => 'toggle',
    'label' => __('Enable Audio (in Beta)', 'ninja-forms-videomail'),
    'width' => 'one-half',
    'group' => 'restrictions',
    'value' => FALSE,
    'help' => __('The audio fetaure is in beta and needs feedback for improvement. Otherwise leave it disabled and stick to Sign Language, grins')
  ),

  'countdown' => array(
    'name' => 'countdown',
    'type' => 'number',
    'label' => __('Countdown Time', 'ninja-forms-videomail'),
    'group' => 'display',
    'value' => 3
  ),

  'width' => array(
    'name' => 'width',
    'type' => 'number',
    'label' => __('Video Width', 'ninja-forms-videomail'),
    'group' => 'display',
    'value' => 320
  ),

  'image_quality' => array(
    'name' => 'image_quality',
    'type' => 'number',
    'label' => __('Image Quality', 'ninja-forms-videomail'),
    'group' => 'display',
    'value' => 40,
    'min' => 1,
    'max' => 100,
    'help' => __('Must be a percentage between 1 and 100 - Beware that higher values results into a sharper video but encoding and transport will be slower. Be thoughtful of users with low bandwidth.', 'ninja-forms-videomail')
  ),

  'verbose' => array(
    'name' => 'verbose',
    'type' => 'toggle',
    'label' => __('Debug Mode', 'ninja-forms-videomail'),
    'width' => 'one-half',
    'group' => 'advanced',
    'value' => FALSE,
    'help' => __('Show verbose comments in the developer console.', 'ninja-forms-videomail')
  )
));
