# Videomail for Ninja Forms (developer documentation)

Record videos in Ninja Forms!

> Finally you can encode any webcam recordings from modern browsers and mobiles into MP4 + WebM within seconds. This without the need for Flash, Java nor any other plugins / addons. Just JavaScript.

With this add-on recording videos in Wordpress forms comes true. No further coding required. Just install + configure a bit, that's all.

More documentation, aimed at the mortal user, is in the readme.txt - this here is for developers only.

## Dependencies

Requires the [Ninja Forms plugin](https://github.com/wpninjas/ninja-forms).

In short: this add-on runs on the Ninja Forms plugin engine where you can configure forms very easily. Upon installation, a new type will be added to enable recordable videos.

## Development

1. Install WordPress locally or use [Local by Flywheel](https://local.getflywheel.com/)
2. Install Ninja Forms Plugin
3. `git clone git@github.com:binarykitchen/videomail-for-ninja-forms.git`
4. Symlink videomail-for-ninja-forms like that: `ln -s /Users/michaelheuberger/code/videomail-for-ninja-forms /Users/michaelheuberger/Local\ Sites/infernalvideomaillocal/app/public/wp-content/plugins/videomail-for-ninja-forms`
5. Install latest nodejs, best with [nvm](https://github.com/creationix/nvm)
6. `npm install` to install dependencies
7. `gulp watch --host x --port y` which will open Google Chrome and automatically reloads upon changes (PHP, JS and CSS). Defaults to https://localhost:8890

Note, if you have a port conflict with flywheel, stop Apache with `sudo apachectl stop`.

### Customise host or port

For custom hosts or ports, you can customize `gulp watch` like that:

`gulp watch --port=8890 --host=wp` and that will open this page for you:
https://wp:8890/wordpress/wp-admin/admin.php?page=ninja-forms

(for exactly these parameters, there is a short cut: `npm run wp` and `wp:8890` is already whitelisted)

## Directory structure

In `src` you do the normal development work. When gulp watches for changes, they get recompiled into the `target` folder and will be served from there.

This is needed so that this repository can be used right away as a plugin folder without the need to run any other commands. This is a requirement for automatic Ninja Forms plugin releases.

In `dist` you can find a latest version in a zip file for easier distribution. Can be useful sometimes. `env` contains code depending on environment, such as bash scripts for building releases.

## Examples

In the `/examples` folder you can see some ready-to-import Ninja Forms templates and HTML examples for re-use. They might inspire you ...

## Documentation

In the `/doc` folder we place in all text and images for the public documentation.

## Report bugs

https://github.com/binarykitchen/videomail-for-ninja-forms/issues

## Releasing

1. Update changelog in readme.txt (stable tag + changelog) but do not touch package.json's version
2. Manually bump version in videomail-for-ninja-forms.php (weird bug)
3. Validate readme.txt with https://wordpress.org/plugins/developers/readme-validator/
4. `npm run patch` (or minor or major)
5. `npm run sync` to sync with the public WordPress site (can take a long time)

## Ask for help

https://binarykitchen.com
