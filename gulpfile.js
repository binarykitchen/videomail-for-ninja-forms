var gulp    = require('gulp')
var nib     = require('nib')
var plugins = require('gulp-load-plugins')()

gulp.task('js', function() {
    return gulp.src('assets/js/videomail.js')
        .pipe(plugins.bytediff.start())
        .pipe(plugins.uglify())
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.bytediff.stop())
        .pipe(gulp.dest('assets/js/min'))
})

gulp.task('css', function() {
    return gulp.src('assets/css/videomail.styl')
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
        .pipe(gulp.dest('assets/css/min'))
})


gulp.task('watch', ['default'], function() {
    gulp.watch('assets/js/*.js', ['js'])
    gulp.watch('assets/css/*.styl', ['css'])
})

gulp.task('todo', function() {
    return gulp.src([ 'includes/**/*.php',
                      'assets/**/*.{js, styl}',
                      'gulpfile.js',
                      'ninja-forms-videomail.php',
                      'tests/*.php'])
        .pipe(plugins.todo())
        .pipe(gulp.dest('./'))
})

// just builds assets once, nothing else
gulp.task('default', ['css', 'js', 'todo'])
