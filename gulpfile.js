const gulp = require("gulp");
const nib = require("nib");
const plugins = require("gulp-load-plugins")();
const argv = require("yargs").argv;
const sourcemaps = require("gulp-sourcemaps");
const del = require("del");
const minimist = require("minimist");
const log = require("fancy-log");
const browserSync = require("browser-sync").create();

const defaultOptions = {
  importance: null,
  version: null,
};

const options = minimist(process.argv.slice(2), { default: defaultOptions });

log.info("Options:", options);

function start(done) {
  const port = argv.port || 8890;
  const host = argv.host || "localhost";

  let projectUrl = "https://" + host;

  if (port) {
    projectUrl += ":" + port;
  }

  projectUrl += "/wp-admin/admin.php?page=ninja-forms";

  const options = {
    proxy: projectUrl,
    browser: "google chrome",
    port,
    open: false,
    injectChanges: true,
  };

  // http://www.browsersync.io/docs/options/
  browserSync.init(options, done);
}

function bundle() {
  return (
    gulp
      .src("src/js/main.js")
      .pipe(sourcemaps.init())
      .pipe(plugins.uglify())
      .pipe(plugins.rename({ suffix: ".min" }))
      // todo fix, sourcemaps do not seem to work (switch to webpack?)
      .pipe(sourcemaps.write())
      .pipe(gulp.dest("target/js"))
  );
}

function copyVideomailClient() {
  return gulp
    .src("node_modules/videomail-client/dist/index.cjs")
    .pipe(gulp.dest("target/js/videomail-client"));
}

function css() {
  return gulp
    .src("src/styl/main.styl")
    .pipe(plugins.plumber())
    .pipe(
      plugins.stylus({
        use: [nib()],
        errors: true,
      }),
    )
    .pipe(plugins.autoprefixer("last 3 versions", "> 2%"))
    .pipe(plugins.bytediff.start())
    .pipe(plugins.cssnano())
    .pipe(plugins.rename({ suffix: ".min" }))
    .pipe(plugins.bytediff.stop())
    .pipe(browserSync.stream())
    .pipe(gulp.dest("target/css"));
}

function cleanPhp() {
  return del(["target/**/*.{php,html}"]);
}

function copyPhp() {
  return gulp.src("src/**/*.{php,html}").pipe(gulp.dest("target"));
}

const php = gulp.series(cleanPhp, copyPhp);

function watch() {
  gulp.watch("src/**/*.{php,html}", php).on("change", browserSync.reload);
  gulp.watch("src/js/**/*.js", bundle).on("change", browserSync.reload);
  gulp.watch("src/styl/**/*.styl", css).on("change", browserSync.reload);
}

function zip() {
  return gulp
    .src(["index.php", "readme.txt", "videomail-for-ninja-forms.php", "target/**"], {
      base: "./",
    })
    .pipe(plugins.zip("videomail-for-ninja-forms.zip"))
    .pipe(gulp.dest("dist"));
}

// just builds assets once, nothing else
const build = gulp.series(css, bundle, copyVideomailClient, php);

exports.build = build;
exports.zip = zip;
exports.watch = gulp.series(build, start, watch);
