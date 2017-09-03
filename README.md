# Ninja Forms - Videomail (developer documentation)

Record videos in Ninja Forms!

> Finally you can encode any webcam recordings from modern browsers and mobiles into MP4 + WebM within seconds. This without the need for Flash, Java nor any other plugins / addons. Just JavaScript.

With this add-on recording videos in Wordpress forms comes true. No further coding required. Just install + configure a bit, that's all.

More documentation, aimed at the mortal user, is in the readme.txt - this here is for developers only.

## Dependencies

Requires the [Ninja Forms v3 plugin](https://github.com/wpninjas/ninja-forms).

In short: this add-on runs on the Ninja Forms plugin engine where you can configure forms very easily. Upon installation, a new type will be added to enable recordable videos.

## Development

1. Install WordPress locally or use [Local by Flywheel](https://local.getflywheel.com/)
2. Install Ninja Forms Plugin
3. `git clone git@github.com:wpninjas/ninja-forms-videomail.git`
4. Symlink ninja-forms-videomail into WordPress plugins folder
4. Install latest nodejs, best with [nvm](https://github.com/creationix/nvm)
5. `npm install` to install npm dependencies
6. `gulp watch --host x --port y` which will open Google Chrome and automatically reloads upon changes (PHP, JS and CSS). Defaults to https://localhost:8890

### Customise host or port

For custom hosts or ports, you can customize `gulp watch` like that:

`gulp watch --port=8890 --host=wp` and that will open this page for you:
https://wp:8890/wordpress/wp-admin/admin.php?page=ninja-forms

(for exactly these parameters, there is a short cut: `npm run wp` and `wp:8890` is already whitelisted)

## Examples

In the `/examples` folder you can see some ready-to-import Ninja Forms templates and HTML examples for re-use. They might inspire you ...

## Documentation

In the `/doc` folder we place in all text and images for the public documentation which is also available on https://ninjaforms.com/docs/videomail/

## Support

https://ninjaforms.com/contact/
