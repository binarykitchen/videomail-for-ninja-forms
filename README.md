# Videomail for Ninja Forms (developer documentation)

[![Test Runner](https://github.com/binarykitchen/videomail-for-ninja-forms/actions/workflows/push.yml/badge.svg)](https://github.com/binarykitchen/videomail-for-ninja-forms/actions/workflows/push.yml)

Record videos in Ninja Forms!

> Finally you can encode any webcam recordings from modern browsers and mobiles into MP4 + WebM within seconds. This without the need for Flash, Java nor any other plugins / addons. Just JavaScript.

With this add-on recording videos in Wordpress forms comes true. No further coding required. Just install + configure a bit, that’s all.

More documentation, aimed at the mortal user, is in the readme.txt - this here is for developers only.

## Dependencies

Requires the [Ninja Forms plugin](https://github.com/wpninjas/ninja-forms).

In short: this add-on runs on the Ninja Forms plugin engine where you can configure forms very easily. Upon installation, a new type will be added to enable recordable videos.

## Playground

If you would like to have a quick play, you can quickly spawn a temporary WordPress site using TasteWP with this URL:<br/>
https://tastewp.com/recipe/5384480fa0

Just note that it will last 6 days only and that you'll have to create a [new whitelist entry](https://www.videomail.io/whitelist) for that.

## Development (Personal)

1. Install WordPress locally or use [Local by Flywheel](https://local.getflywheel.com/)
2. Log into Local
   2.1 If there is a blueprint under ./env/dev/local/videomail_for_ninja_forms_blueprint_local.zip import it
   2.2 Or else configure it manually as following:
   2.2.1 Install Ninja Forms Plugin and activate it
   2.2.2 `git clone git@github.com:binarykitchen/videomail-for-ninja-forms.git`
   2.2.3 Symlink videomail-for-ninja-forms like that: `ln -s ~/code/binarykitchen/videomail-for-ninja-forms ~/Local\ Sites/videomail-for-ninja-forms/app/public/wp-content/plugins/videomail-for-ninja-forms`
   2.2.4. Activate it on WP admin side
   2.2.5 Import the template form from ./examples/nf_form_video_contact_us.nff
   2.2.6 Download the PHP Error Log plugin from https://wordpress.org/plugins/error-log-monitor/ and install it locally
   2.2.7. Activate it on WP admin side
3. Install latest nodejs, best with [nvm](https://github.com/creationix/nvm)
4. `npm install` to install dependencies
5. `gulp watch --host x --port y` which will open Google Chrome and automatically reloads upon changes (PHP, JS and CSS). Defaults to https://localhost:8890

Note: depending on your OS the `gulp watch` command might result into errors;

### Arch Linux Issues

- Afraid have to amend `sudo` before `npm run mh` or so. <-------- !!!
- Can't use .local domain as it's [reserved under Arch Linux](https://community.localwp.com/t/local-tld-is-not-resolved-when-in-hosts-file-if-used-on-arch-based-linux/43793/6)

### Customize host or port

For custom hosts or ports, you can customize `gulp watch` like that:

`gulp watch --port=8890 --host=wp` and that will open this page for you:
https://wp:8890/wordpress/wp-admin/admin.php?page=ninja-forms

(for exactly these parameters, there is a short cut: `npm run wp` and `wp:8890` is already whitelisted)

## Directory structure

In `src` you do the normal development work. When gulp watches for changes, they get recompiled into the `target` folder and will be served from there.

This is needed so that this repository can be used right away as a plugin folder without the need to run any other commands. This is a requirement for automatic Ninja Forms plugin releases.

In `dist` you can find a latest version in a zip file for easier distribution. Can be useful sometimes. `env` contains code depending on environment, such as bash scripts for building releases.

## Examples

In the `/examples` folder you can see some ready-to-import Ninja Forms templates and HTML examples for re-use. They might inspire you …

## Documentation

In the `/doc` folder we place in all text and images for the public documentation.

## Report bugs

https://github.com/binarykitchen/videomail-for-ninja-forms/issues

## Releasing

1. Ensure you are on develop branch
2. Write changelog in `readme.txt`
3. Bump versions in `readme.txt`:
   - If there was a WordPress upgrade, bump it under "tested up to", otherwise
   - "stable tag" using this plugin's latest version from changelog
4. Search for current stable tag version and replace it with the new one. Should be these files:
   - package.json
   - readme.txt
   - src/js/main.js
   - src/php/videomail.php
   - videomail-for-ninja-forms.php
5. Optional: validate readme.txt with https://wordpress.org/plugins/developers/readme-validator/
6. Run `npm run clean`, `npm install` and `npm run build`
7. Git commit and push
8. Run `npm run release`
9. Tag a new release which will run the release workflow on GitHub with `gh release create`.
   Skip optional title, then under release notes, select "Write my own" and
   paste the new version section from readme.txt (just the section without the date and version number)
   (upon any errors, you may try to run manually "gh release create" again to trigger a release on GitHub)
10. Wait until the release is published and
    make sure the new version is announced on https://wordpress.org/plugins/videomail-for-ninja-forms as
    this can take a while ...
11. Announce on Social Media

## Ask for help

https://binarykitchen.com
