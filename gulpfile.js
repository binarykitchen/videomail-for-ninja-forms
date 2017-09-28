const gulp = require('gulp')
const nib = require('nib')
const plugins = require('gulp-load-plugins')()
const argv = require('yargs').argv
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const minimist = require('minimist')
const path = require('path')

const defaultOptions = {
  importance: null,
  version: null
}

const options = minimist(process.argv.slice(2), {default: defaultOptions})

// reloads browser and injects CSS
const browserSync = require('browser-sync').create()

// for manual browser reload
const reload = browserSync.reload

gulp.task('browser-sync', function () {
  const port = argv.port || 8890
  const host = argv.host || 'localhost'

  var projectUrl = 'https://' + host

  if (port) {
    projectUrl += ':' + port
  }

  projectUrl += '/wp-admin/admin.php?page=ninja-forms'

  // http://www.browsersync.io/docs/options/
  browserSync.init({
    proxy: projectUrl,
    browser: ['google-chrome'],
    port: port,
    https: true,
    host: host,
    open: 'external',
    injectChanges: true
  })
})

gulp.task('standard', function () {
  return gulp.src(['src/js/main.js'])
    .pipe(plugins.standard())
    .pipe(plugins.standard.reporter('default', {
      breakOnError: true,
      quiet: true
    }))
})

gulp.task('js', ['standard'], function () {
  return gulp.src('src/js/main.js')
    .pipe(sourcemaps.init())
    .pipe(plugins.uglify())
    .pipe(plugins.rename({suffix: '.min'}))
     // todo fix, sourcemaps do not seem to work (switch to webpack?)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('target/js'))
})

gulp.task('copy-videomail-client', function () {
  return gulp
    .src('node_modules/videomail-client/dist/videomail-client.min.*')
    .pipe(gulp.dest('target/js/videomail-client'))
})

gulp.task('css', function () {
  return gulp.src('src/styl/main.styl')
    .pipe(plugins.plumber())
    .pipe(plugins.stylus({
      use: [nib()],
      errors: true
    }))
    .pipe(plugins.autoprefixer(
      'last 4 versions',
      '> 2%',
      'Explorer >= 11',
      'Chrome >= 44',
      'Firefox >= 45',
      'iOS >= 9',
      'android >= 4'
    ))
    .pipe(plugins.bytediff.start())
    .pipe(plugins.cssnano())
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(plugins.bytediff.stop())
    .pipe(browserSync.stream())
    .pipe(gulp.dest('target/css'))
})

gulp.task('clean:php', function () {
  return del([
    'target/**/*.{php,html}'
  ])
})

gulp.task('php', ['clean:php'], function () {
  return gulp.src('src/**/*.{php,html}')
    .pipe(gulp.dest('target'))
})

gulp.task('watch', ['default', 'browser-sync'], function () {
  gulp.watch('src/**/*.{php,html}', ['php', reload])
  gulp.watch('src/js/**/*.js', ['js', reload])
  gulp.watch('src/styl/**/*.styl', ['css'])
})

gulp.task('todo', function () {
  return gulp.src([
    'src/**/*.{php,js,styl}',
    'gulpfile.js'
  ])
  .pipe(plugins.todo())
  .pipe(gulp.dest('./'))
})

gulp.task('zip', ['css', 'js', 'copy-videomail-client', 'todo', 'php'], function () {
  return gulp.src(['target/**'])
    .pipe(plugins.zip('ninja-forms-videomail.zip'))
    .pipe(gulp.dest('dist'))
})

// get inspired by
// https://www.npmjs.com/package/gulp-tag-version and
// https://github.com/nicksrandall/gulp-release-tasks/blob/master/tasks/release.js
gulp.task('bumpVersion', () => {
  const bumpOptions = {}

  if (options.version) {
    bumpOptions.version = options.version
  } else if (options.importance) {
    bumpOptions.type = options.importance
  }

  return gulp.src([
    './package.json',
    './src/ninja-forms-videomail.php',
    './readme.txt'
  ])
  .pipe(plugins.bump(bumpOptions))
  .pipe(plugins.if(options.write, gulp.dest(function (file) {
    return path.dirname(file.path)
  })))
  .on('error', plugins.util.log)
})

// just builds assets once, nothing else
gulp.task('default', ['css', 'js', 'copy-videomail-client', 'todo', 'php', 'zip'])
