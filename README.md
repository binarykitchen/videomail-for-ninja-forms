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

If you would like to have a quick play, you can quickly spawn a temporary WordPress site using TasteWP with this URL:
<https://tastewp.com/recipe/fba0d4f1cd>

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
   2.2.6 Download the PHP Error Log plugin from <https://wordpress.org/plugins/error-log-monitor> and install it locally
   2.2.7. Activate it on WP admin side
3. Install latest nodejs, best with [nvm](https://github.com/creationix/nvm)
4. `npm install` to install dependencies
5. `gulp watch --host x --port y` which will open Google Chrome and automatically reloads upon changes (PHP, JS and CSS). Defaults to <https://localhost:8890>

Note: depending on your OS the `gulp watch` command might result into errors;

### Arch Linux Issues

- Afraid have to amend `sudo` before `npm run mh` or so.
- Can't use .local domain as it's [reserved under Arch Linux](<https://community.localwp.com/t/local-tld-is-not-resolved-when-in-hosts-file-if-used-on-arch-basedgit> -linux/43793/6).

### Customize host or port

For custom hosts or ports, you can customize `gulp watch` like that:

`gulp watch --port=8890 --host=wp` and that will open this page for you:
<https://wp:8890/wordpress/wp-admin/admin.php?page=ninja-forms>

(for exactly these parameters, there is a short cut: `npm run wp` and `wp:8890` is already whitelisted)

## Directory structure

In `src` you do the normal development work. When gulp watches for changes, they get recompiled into the `target` folder and will be served from there.

This is needed so that this repository can be used right away as a plugin folder without the need to run any other commands. This is a requirement for automatic Ninja Forms plugin releases.

In `dist` you can find a latest version in a zip file for easier distribution. Can be useful sometimes. `env` contains code depending on environment, such as bash scripts for building releases.

## Documentation

In the `/doc` folder we place in all text and images for the public documentation.

## Report bugs

<https://github.com/binarykitchen/videomail-for-ninja-forms/issues>

## Releasing

1. Ensure `develop` is clean and current, then run `nvm use && npm ci`.
2. (Optional) Review dependency updates with `npm outdated`.
3. Add the new changelog section to `readme.txt`.
4. Set the version to the new version number once, for example with `npm version 11.5.0 --no-git-tag-version`. The npm lifecycle synchronizes the stable tag, plugin header, PHP constant, JavaScript diagnostic version, and lockfile.
5. Optionally update "Tested up to" after testing the corresponding WordPress release.
6. Run `npm run check`, review the generated files, commit everything, and push `develop`.
7. Wait for the Test Runner workflow to pass.
8. Run `npm run release`. The script validates and packages the plugin, merges and tags the release, then creates the GitHub release.
9. The release workflow deploys to WordPress.org and attaches its canonical ZIP to GitHub. Verify the new version on <https://wordpress.org/plugins/videomail-for-ninja-forms>.

## Ask for help

<https://binarykitchen.com>
