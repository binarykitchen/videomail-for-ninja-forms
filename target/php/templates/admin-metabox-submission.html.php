<video controls poster="<?php echo esc_url($poster); ?>" style="display: block; margin: auto;">
  <?php foreach( $source as $type => $src ): ?>
  <source src="<?php echo esc_url($src); ?>" type="<?php echo esc_attr($type); ?>">
  <?php endforeach; ?>
  Your browser does not support the video tag.
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
