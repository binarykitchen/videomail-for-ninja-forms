<?php

return apply_filters('ninja_forms_videomail_field_settings', array(

  'media_library' => array(
		'name'  => 'media_library',
		'type'  => 'toggle',
		'value' => 'false',
		'label' => __('Save to Media Library', 'videomail-for-ninja-forms'),
		'group' => 'primary',
		'width' => 'one-half',
		'help'  => __('Save to Media Library.', 'videomail-for-ninja-forms'),
	),

  'audio_enabled' => array(
    'name' => 'audio_enabled',
    'type' => 'toggle',
    'label' => __('Enable Audio (in Beta)', 'videomail-for-ninja-forms'),
    'width' => 'one-half',
    'group' => 'primary',
    'value' => true,
    'help' => __('The audio feature is in beta and needs feedback for improvement. Otherwise leave it disabled and stick to Sign Language, grins')
  ),

  'site_name' => array(
    'name' => 'site_name',
    'type' => 'textbox',
    'label' => __('Site Name ID', 'videomail-for-ninja-forms'),
    'width' => 'full',
    'group' => 'primary',
    'value' => 'videomail-for-ninja-forms-local',
    'help' => __('A valid site-name ID must be registered with the developer at www.videomail.io. The default one, videomail-for-ninja-forms-local, always works for local development/testing.', 'videomail-for-ninja-forms')
  ),

  'email_from' => array(
    'name' => 'email_from',
    'type' => 'textbox',
    'group' => 'primary',
    'label' => __('From', 'videomail-for-ninja-forms'),
    'placeholder' => __('Email address or search for a field', 'videomail-for-ninja-forms'),
    'value' => '',
    'width' => 'full',
    'use_merge_tags' => true
  ),

  'email_to' => array(
    'name' => 'email_to',
    'type' => 'textbox',
    'group' => 'primary',
    'label' => __('To', 'videomail-for-ninja-forms'),
    'placeholder' => __('Email address or search for a field', 'videomail-for-ninja-forms'),
    'value' => '',
    'width' => 'full',
    'use_merge_tags' => true
  ),

  'email_subject' => array(
    'name' => 'email_subject',
    'type' => 'textbox',
    'group' => 'primary',
    'label' => __('Subject', 'videomail-for-ninja-forms'),
    'placeholder' => __('Subject Text or search for a field', 'videomail-for-ninja-forms'),
    'value' => '',
    'width' => 'full',
    'use_merge_tags' => true
  ),

  'email_body' => array(
    'name' => 'email_body',
    'type' => 'textbox',
    'group' => 'primary',
    'label' => __('Body', 'videomail-for-ninja-forms'),
    'placeholder' => __('Body Text or search for a field', 'videomail-for-ninja-forms'),
    'value' => '',
    'width' => 'full',
    'use_merge_tags' => true
  ),

  'limit_seconds' => array(
    'name' => 'limit_seconds',
    'type' => 'number',
    'label' => __('Limit Recording (in Seconds)', 'videomail-for-ninja-forms'),
    'width' => 'one-half',
    'group' => 'restrictions',
    'value' => 80
  ),

  'countdown' => array(
    'name' => 'countdown',
    'type' => 'number',
    'label' => __('Countdown Time', 'videomail-for-ninja-forms'),
    'group' => 'display',
    'value' => 3
  ),

  'image_quality' => array(
    'name' => 'image_quality',
    'type' => 'number',
    'label' => __('Image Quality', 'videomail-for-ninja-forms'),
    'group' => 'display',
    'value' => 40,
    'min' => 1,
    'max' => 100,
    'help' => __('Must be a percentage between 1 and 100 - Beware that higher values results into a sharper video but encoding and transport will be slower. Be thoughtful of users with low bandwidth.', 'videomail-for-ninja-forms')
  ),

  'width' => array(
    'name' => 'width',
    'type' => 'number',
    'label' => __('Video width in pixels', 'videomail-for-ninja-forms'),
    'group' => 'display',
    'value' => 320,
    'help' => __('The higher, the better the quality. Not recommended for low bandwidth connections.', 'videomail-for-ninja-forms')
  ),

  'stretch' => array(
    'name' => 'stretch',
    'type' => 'toggle',
    'label' => __('Stretch', 'videomail-for-ninja-forms'),
    'width' => 'one-half',
    'group' => 'display',
    'value' => false,
    'help' => __('Stretch video to full width of the parent container.', 'videomail-for-ninja-forms')
  ),

  'verbose' => array(
    'name' => 'verbose',
    'type' => 'toggle',
    'label' => __('Debug Mode', 'videomail-for-ninja-forms'),
    'width' => 'one-half',
    'group' => 'advanced',
    'value' => false,
    'help' => __('Show verbose comments in the developer console.', 'videomail-for-ninja-forms')
  ),

  'load_user_media_on_record' => array(
    'name' => 'load_user_media_on_record',
    'type' => 'toggle',
    'label' => __('Ask for camera permission on record (fallback, not recommended)', 'videomail-for-ninja-forms'),
    'width' => 'one-half',
    'group' => 'advanced',
    'value' => false,
    'help' => __('With this option enabled, the user will not be asked for camera permissions unless the record button is clicked. When disabled (default), permissions are being asked on page load which is preferred. This option is only for when the there is a conflict with the application when already many other events occur on page load.', 'videomail-for-ninja-forms')
  )

  'disable_form_when_submitting' => array(
    'name' => 'disable_form_when_submitting',
    'type' => 'toggle',
    'label' => __('Disable form inputs once submitted', 'videomail-for-ninja-forms'),
    'width' => 'one-half',
    'group' => 'advanced',
    'value' => false,
    'help' => __('With this option enabled, all form inputs become disabled once submitted and cannot be changed which the ideal during any submissions. Unfortunately WordPress plugins can overlap with each other the submit button, hence it is disabled by default. Only enable if you are sure and have fully tested it.', 'videomail-for-ninja-forms')
  )
));
