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

If you would like to have a quick play, you can quickly spawn a temporary WordPress site using TasteWP with this URL: <https://tastewp.com/>

There you always get a fresh WordPress installation where you can test the plugin without affecting your local setup.

### Playground Note

For any updates of this plugin, we developers can try to do the following:

1. Wait a while after `npm run release` to ensure the release process has completed.
2. Log into <https://tastewp.com/dashboard/>
3. Ensure the latest release of the plugin is available.
4. Delete and recreate the temporary WordPress site.
5. Install & Activate the Ninja Forms plugin.
6. Install & Activate the Videomail for Ninja Forms plugin.
7. In the WordPress admin, go to Ninja Forms > Import /Export
   and import the template form from ./examples/nf_form_video_contact_us.nff
8. Click on "Preview changes" to see the form in action.
9. Update that preview URL in this documentation accordingly.

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

1. Ensure the `develop` branch remains clean and current.
2. Review dependency updates with `npm outdated`.
   - Whenever updated, test all over again.
3. Add the new changelog section to `readme.txt`.
4. Set the version to the new version number once, for example like this: `npm version 12.1.0 --no-git-tag-version`.
   - This npm lifecycle synchronizes the stable tag, plugin header, PHP constant, JavaScript diagnostic version, and lockfile, all in one go.
5. (Optional) update "Tested up to" after testing the corresponding WordPress release.
6. Run `npm run quality`, review the generated files
7. Commit everything with a short summary which ...
   - can be extracted from the [readme.txt](readme.txt)
   - and then push to `develop`.
8. Wait for the Test Runner workflow to pass, see [our Github action page](https://github.com/binarykitchen/videomail-for-ninja-forms/actions)
9. Run `npm run release`. Quality must pass before the release script starts. The script installs locked dependencies and repeats quality checks after updating the branches, before creating the release branch, packaging, merging or tagging.
10. The release workflow deploys to WordPress.org and attaches its canonical ZIP to GitHub. Verify the new version on <https://wordpress.org/plugins/videomail-for-ninja-forms>.

## Quality checks and tests

Use the Node version in [`.nvmrc`](.nvmrc), npm as specified in [`package.json`](package.json), and PHP 8.1 or newer. Run `npm ci` first.

- `npm run quality`: version synchronization, formatting, ESLint (no warnings), PHP syntax checks, JavaScript and PHP unit tests, production dependency audit, and the complete JS/CSS/PHP build. Each step must pass; `npm run check` remains an alias.
- `npm test`: both unit suites without rebuilding.
- `npm run test:js`: Node's built-in test runner with a coverage report and a 95% minimum for lines, branches and functions in the measured JavaScript source (currently the browser controller). Release/version tooling is tested in subprocesses and is not included in that coverage percentage.
- `npm run test:php`: dependency-free PHP behavior tests. PHP warnings become test failures.
- `npm run lint` / `npm run lint:php`: JavaScript linting / PHP syntax checks, including test files.

The [JavaScript tests](tests/js) execute the actual browser controller with mocked Marionette, Backbone/Ninja Forms channels and videomail-client. They cover configuration, recording events, required validation, two-stage submission, multipart navigation, merge tags, legacy fallbacks and cleanup. Tooling tests exercise version synchronization and verify that failed quality checks prevent release execution.

The [PHP tests](tests/php) use deliberately small WordPress/Ninja Forms doubles to exercise field processing, merge tags, trusted media URLs, download/sideload errors, asset dependencies, hooks and admin rendering. These doubles do **not** certify real WordPress sanitization, Ninja Forms compatibility, or actual media uploads. No tests access cameras or contact videomail.io. The build checks Stylus/CSS compilation, but is not a visual regression test.

Both push/PR and deployment workflows run the same quality gate. Test files are excluded from WordPress.org distributions.

### Recommended next release improvements

1. Add a WordPress + Ninja Forms integration job and browser smoke tests for required/optional video fields, multipart and conditional forms, record/stop/re-record, and email merge tags. Use fake browser media and a controlled server fixture; keep an opt-in staging test for the real videomail service and network reconnection.
2. Test PHP's minimum supported version and current supported versions in CI. Add WordPress Coding Standards/PHPCS and PHP static analysis separately from syntax linting.
3. Build one immutable ZIP in CI from the release tag, inspect its contents and plugin headers, then publish that exact tested artifact to GitHub and WordPress.org. Currently the local ZIP and deployment-generated ZIP are separate builds; the local packaging task also relies on an already-current `target` directory.
4. Consider replacing the local multi-branch merge script with a version/changelog release PR followed by an approved tag-driven workflow. Keep the existing version synchronization as the single source of truth and protect release branches with required quality checks.
5. Make publishing resumable: create a draft GitHub release, deploy and upload the ZIP, then publish. Today a deployment failure can leave a published GitHub release without its asset; a retry can also be blocked by an existing tag. Push only the intended release tag rather than all local tags.
6. Consider removing generated ZIPs/build output from Git history once CI owns artifact creation. Until then, retain the committed-output freshness check. The current script refuses a release when rebuilding produces no changes, even if the version/changelog commit already contains the correct artifacts.
7. Automate dependency-update PRs for videomail-client and build tooling, pin deployment actions to reviewed commit SHAs, and record tested WordPress/Ninja Forms/client versions. Client transport behavior belongs in the client package's own tests; this repository should test the integration contract.

## Ask for help

<https://binarykitchen.com>
