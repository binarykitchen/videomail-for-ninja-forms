var gulp    = require('gulp')
var nib     = require('nib')
var stylish = require('jshint-stylish')
var plugins = require('gulp-load-plugins')()
var argv    = require('yargs').argv

// Reloads browser and injects CSS. Time-saving synchronised browser testing.
var browserSync = require('browser-sync').create()

// For manual browser reload.
var reload = browserSync.reload

// Using Bitnami's Wordpress Stack which serves local WP at this address
var PROJECT_URL = "http://localhost:8080/wordpress/wp-admin/admin.php?page=ninja-forms"

gulp.task('browser-sync', function() {
    var port  = argv.port   || 8080
    var https = argv.https || false
    var host  = argv.host || null


    browserSync.init({
        // http://www.browsersync.io/docs/options/

        proxy:          PROJECT_URL,
        browser:        ["google-chrome"],
        port:           port,
        https:          https,
        host:           host,
        open:           true,
        injectChanges:  true,
    })
})

gulp.task('jshint', function() {
    return gulp.src('assets/js/main.js')
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter(stylish))
})

gulp.task('js', ['jshint'], function() {
    return gulp.src('assets/js/main.js')
        .pipe(plugins.bytediff.start())
        .pipe(plugins.uglify())
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.bytediff.stop())
        .pipe(gulp.dest('assets/js/min'))
})

gulp.task('css', function() {
    gulp.src('assets/css/videomail.styl')
        .pipe(plugins.plumber()) // with the plumber the gulp task won't crash on errors
        .pipe(plugins.stylus({
            use:    [nib()],
            errors: true
        }))
        .pipe(plugins.autoprefixer(
            'last 5 versions',
            '> 2%',
            'Explorer >= 10',
            'Chrome >= 41',
            'Firefox >= 41',
            'iOS >= 8',
            'android >= 4'
        ))
        .pipe(plugins.bytediff.start())
        .pipe(plugins.cssnano())
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.bytediff.stop())
        .pipe(browserSync.stream())
        .pipe(gulp.dest('assets/css/min'))
})


gulp.task('watch', ['default', 'browser-sync'], function() {
    gulp.watch('includes/**/*.php', reload)
    gulp.watch('assets/js/*.js', ['js', reload])
    gulp.watch('assets/css/*.styl', ['css'])
})

gulp.task('todo', function() {
    gulp.src(['includes/**/*.php',
              'assets/**/*.{js, styl}',
              'gulpfile.js',
              'ninja-forms-videomail.php',
              'tests/*.php'])
        .pipe(plugins.todo())
        .pipe(gulp.dest('./'))
})

// just builds assets once, nothing else
gulp.task('default', ['css', 'js', 'todo'])
