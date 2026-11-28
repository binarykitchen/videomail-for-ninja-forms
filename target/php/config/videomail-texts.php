<?php

// Everything the recorder shows visitors, translated on the server. Ninja Forms prints field
// templates as plain HTML without running PHP, so these travel to the browser with the settings.
return array(
  // Same shape as videomail-client's `text` option, so the browser can hand it over as is. The
  // template's buttons show these labels too, because videomail-client keeps existing labels.
  'recorder' => array(
    'pausedHeader' => _x('Paused', 'recorder status', 'videomail-for-ninja-forms'),
    'sending' => _x('Teleporting', 'recorder status while uploading the video', 'videomail-for-ninja-forms'),
    'encoding' => _x('Encoding', 'recorder status', 'videomail-for-ninja-forms'),
    'limitReached' => _x('Limit reached', 'recorder status', 'videomail-for-ninja-forms'),
    'audioOff' => _x('Audio off', 'recorder switch', 'videomail-for-ninja-forms'),
    'audioOn' => _x('Audio on', 'recorder switch', 'videomail-for-ninja-forms'),
    'buttons' => array(
      'record' => _x('Record', 'recorder button', 'videomail-for-ninja-forms'),
      'pause' => _x('Pause', 'recorder button', 'videomail-for-ninja-forms'),
      'resume' => _x('Resume', 'recorder button', 'videomail-for-ninja-forms'),
      'preview' => _x('Stop', 'recorder button that stops and shows a preview', 'videomail-for-ninja-forms'),
      'recordAgain' => _x('Record again', 'recorder button', 'videomail-for-ninja-forms'),
      'switchCamera' => _x('Switch camera', 'recorder button', 'videomail-for-ninja-forms'),
    ),
  ),

  // Tooltips for the buttons in templates/fields-videomail.html
  'buttonTitles' => array(
    'record' => __('Record video', 'videomail-for-ninja-forms'),
    'pause' => __('Pause recording', 'videomail-for-ninja-forms'),
    'resume' => __('Resume recording', 'videomail-for-ninja-forms'),
    'preview' => __('Stop recording and check video', 'videomail-for-ninja-forms'),
    'recordAgain' => __('Record video again', 'videomail-for-ninja-forms'),
  ),

  // Same words as the server-side check in fields/videomail.php, so they share one translation
  'requiredError' => __('Record and click on stop to see a preview video.', 'videomail-for-ninja-forms'),
);
