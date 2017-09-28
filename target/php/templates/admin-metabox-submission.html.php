<video controls poster="<?php echo $poster; ?>" style="display: block; margin: auto;">
  <?php foreach( $source as $type => $src ): ?>
  <source src="<?php echo $src; ?>" type="<?php echo $type; ?>">
  <?php endforeach; ?>
  Your browser does not support the video tag.
</video>

<ul>
<?php foreach( $source as $type => $src ): ?>
  <li>
    <a href="<?php echo $src; ?>">
      <?php echo $text[ 'download' ]; ?> (<?php echo $type; ?>)
    </a>
  </li>
<?php endforeach; ?>
</ul>
