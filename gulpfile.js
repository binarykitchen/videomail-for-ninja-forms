const gulp = require('gulp')
const nib = require('nib')
const plugins = require('gulp-load-plugins')()
const argv = require('yargs').argv
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const minimist = require('minimist')
const path = require('path')
const log = require('fancy-log')
const browserSync = require('browser-sync').create()

const defaultOptions = {
  importance: null,
  version: null
}

const options = minimist(process.argv.slice(2), { default: defaultOptions })

log.info('Options:', options)

function start(done) {
  const port = argv.port || 8890
  const host = argv.host || 'localhost'

  let projectUrl = 'https://' + host

  if (port) {
    projectUrl += ':' + port
  }

  projectUrl += '/wp-admin/admin.php?page=ninja-forms'

  // http://www.browsersync.io/docs/options/
  browserSync.init({
    proxy: projectUrl,
    browser: 'google chrome',
    port,
    https: true,
    host,
    open: 'external',
    injectChanges: true
  })

  done()
}

function lint() {
  return gulp
    .src(['src/js/main.js'])
    .pipe(plugins.standard())
    .pipe(
      plugins.standard.reporter('default', {
        breakOnError: true,
        quiet: true
      })
    )
}

function bundle() {
  return (
    gulp
      .src('src/js/main.js')
      .pipe(sourcemaps.init())
      .pipe(plugins.uglify())
      .pipe(plugins.rename({ suffix: '.min' }))
      // todo fix, sourcemaps do not seem to work (switch to webpack?)
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('target/js'))
  )
}

const js = gulp.series(lint, bundle)

function copyVideomailClient() {
  return gulp
    .src('node_modules/videomail-client/prototype/js/videomail-client.js')
    .pipe(gulp.dest('target/js/videomail-client'))
}

function css() {
  return gulp
    .src('src/styl/main.styl')
    .pipe(plugins.plumber())
    .pipe(
      plugins.stylus({
        use: [nib()],
        errors: true
      })
    )
    .pipe(
      plugins.autoprefixer(
        'last 3 versions',
        '> 2%',
        'Explorer >= 11',
        'Chrome >= 46',
        'Firefox >= 52',
        'iOS >= 9',
        'android >= 4'
      )
    )
    .pipe(plugins.bytediff.start())
    .pipe(plugins.cssnano())
    .pipe(plugins.rename({ suffix: '.min' }))
    .pipe(plugins.bytediff.stop())
    .pipe(browserSync.stream())
    .pipe(gulp.dest('target/css'))
}

function cleanPhp() {
  return del(['target/**/*.{php,html}'])
}

function copyPhp() {
  return gulp.src('src/**/*.{php,html}').pipe(gulp.dest('target'))
}

const php = gulp.series(cleanPhp, copyPhp)

function watch() {
  gulp.watch('src/**/*.{php,html}', php).on('change', browserSync.reload)
  gulp.watch('src/js/**/*.js', js).on('change', browserSync.reload)
  gulp.watch('src/styl/**/*.styl', css).on('change', browserSync.reload)
}

function todo() {
  return gulp
    .src(['videomail-for-ninja-forms.php', 'src/**/*.{php,js,styl}', 'gulpfile.js'])
    .pipe(plugins.todo())
    .pipe(gulp.dest('./'))
}

function zip() {
  return gulp
    .src(['index.php', 'readme.txt', 'videomail-for-ninja-forms.php', 'target/**'], {
      base: './'
    })
    .pipe(plugins.zip('videomail-for-ninja-forms.zip'))
    .pipe(gulp.dest('dist'))
}

// get inspired by
// https://www.npmjs.com/package/gulp-tag-version and
// https://github.com/nicksrandall/gulp-release-tasks/blob/master/tasks/release.js
exports.bumpVersion = function () {
  const bumpOptions = { keys: ['version', 'Stable tag'] }

  if (options.version) {
    bumpOptions.version = options.version
  } else if (options.importance) {
    bumpOptions.type = options.importance
  }

  return gulp
    .src([
      './package.json',
      './readme.txt',
      './videomail-for-ninja-forms.php',
      './src/php/videomail.php'
    ])
    .pipe(plugins.bump(bumpOptions))
    .pipe(
      plugins.if(
        options.write,
        gulp.dest(function (file) {
          return path.dirname(file.path)
        })
      )
    )
    .on('error', log.error)
}

// just builds assets once, nothing else
const build = gulp.series(css, js, copyVideomailClient, todo, php)

exports.build = build
exports.zip = zip
exports.watch = gulp.series(build, start, watch)
