<?php
// crossorigin lets the browser load captions from videomail.io, which serves them with CORS just like
// for its own player. Only set alongside captions, so plain playback stays exactly as before.
?>
<video controls<?php if ($captions): ?> crossorigin="anonymous"<?php endif; ?> poster="<?php echo esc_url($poster); ?>" style="display: block; margin: auto;">
  <?php foreach( $source as $type => $src ): ?>
  <source src="<?php echo esc_url($src); ?>" type="<?php echo esc_attr($type); ?>">
  <?php endforeach; ?>
  <?php if ($captions): ?>
  <track kind="captions" src="<?php echo esc_url($captions); ?>" label="<?php echo esc_attr($text['captions']); ?>" default>
  <?php endif; ?>
  <?php echo esc_html($text['unsupported']); ?>
</video>

<ul>
<?php foreach( $source as $type => $src ): ?>
  <li>
    <a href="<?php echo esc_url($src); ?>">
      <?php echo esc_html($text['download']); ?> (<?php echo esc_html($type); ?>)
    </a>
  </li>
<?php endforeach; ?>
</ul>
