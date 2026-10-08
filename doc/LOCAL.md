# Local Development

1. Install WordPress locally or use [Local by Flywheel](https://local.getflywheel.com/)
2. Log into Local 2.1 If there is a blueprint under ./env/dev/local/videomail_for_ninja_forms_blueprint_local.zip import it 2.2 Or else configure it manually as following: 2.2.1 Install Ninja Forms Plugin and activate it 2.2.2 `git clone git@github.com:binarykitchen/videomail-for-ninja-forms.git` 2.2.3 Symlink videomail-for-ninja-forms like that: `ln -s ~/code/binarykitchen/videomail-for-ninja-forms ~/Local\ Sites/videomail-for-ninja-forms/app/public/wp-content/plugins/videomail-for-ninja-forms` 2.2.4. Activate it on WP admin side 2.2.5 Import the template form from ./examples/nf_form_video_contact_us.nff 2.2.6 Download the PHP Error Log plugin from <https://wordpress.org/plugins/error-log-monitor> and install it locally 2.2.7. Activate it on WP admin side
3. Install latest nodejs, best with [nvm](https://github.com/creationix/nvm)
4. `npm install` to install dependencies
5. `gulp watch --host x --port y` which will open Google Chrome and automatically reloads upon changes (PHP, JS and CSS). Defaults to <https://localhost:8890>

Note: depending on your OS the `gulp watch` command might result into errors.

## Arch Linux Issues

- Afraid have to amend `sudo` before `npm run mh` or so.
- Can't use .local domain as it's [reserved under Arch Linux](<https://community.localwp.com/t/local-tld-is-not-resolved-when-in-hosts-file-if-used-on-arch-basedgit> -linux/43793/6).

## Customize host or port

For custom hosts or ports, you can customize `gulp watch` like that:

`gulp watch --port=8890 --host=wp` and that will open this page for you: <https://wp:8890/wordpress/wp-admin/admin.php?page=ninja-forms>

(for exactly these parameters, there is a short cut: `npm run wp` and `wp:8890` is already whitelisted)
