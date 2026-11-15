# Quality

Use the Node version in [`.nvmrc`](./../.nvmrc), npm as specified in [`package.json`](./../package.json), and PHP 8.1 or newer. Run `npm ci` first.

- `npm run quality`: version synchronization, formatting, ESLint (no warnings), PHP syntax checks, JavaScript and PHP unit tests, production dependency audit, and the complete JS/CSS/PHP build. Each step must pass; `npm run check` remains an alias.
- `npm test`: both unit suites without rebuilding.
- `npm run test:js`: Node's built-in test runner with a coverage report and a 95% minimum for lines, branches and functions in the measured JavaScript source (currently the browser controller). Release/version tooling is tested in subprocesses and is not included in that coverage percentage.
- `npm run test:php`: dependency-free PHP behavior tests. PHP warnings become test failures.
- `npm run lint` / `npm run lint:php`: JavaScript linting / PHP syntax checks, including test files.

The [JavaScript tests](../tests/js) execute the actual browser controller with mocked Marionette, Backbone/Ninja Forms channels and videomail-client. They cover configuration, recording events, required validation, two-stage submission, multipart navigation, merge tags, legacy fallbacks and cleanup. Tooling tests exercise version synchronization and verify that failed quality checks prevent release execution.

The [PHP tests](../tests/php) use deliberately small WordPress/Ninja Forms doubles to exercise field processing, merge tags, trusted media URLs, download/sideload errors, asset dependencies, hooks and admin rendering. These doubles do **not** certify real WordPress sanitization, Ninja Forms compatibility, or actual media uploads. No tests access cameras or contact videomail.io. The build checks Stylus/CSS compilation, but is not a visual regression test.

Startup regression tests run PHP in isolated processes against the real plugin entry point and source PHP copied into the deployed directory layout. Unlike the behavior tests, they do not preload Videomail classes: they exercise autoloading, the Ninja Forms startup hook and field-registration filter, and confirm that the example form's Videomail field type resolves. Missing, older and deprecated Ninja Forms dependency configurations are also checked.

Both push/PR and deployment workflows run the same quality gate. Test files are excluded from WordPress.org distributions.
