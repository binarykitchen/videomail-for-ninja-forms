var gulp    = require('gulp')
var plugins = require('gulp-load-plugins')()

gulp.task('js', function () {
    gulp.src('assets/js/videomail.js')
        .pipe(plugins.bytediff.start())
        .pipe(plugins.uglify())
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.bytediff.stop())
        .pipe(gulp.dest('assets/js/min'))
})

gulp.task('css', function(cb) {
    gulp.src('assets/css/videomail.css')
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
    gulp.watch('assets/js/*.css', ['css'])
})

gulp.task('todo', function() {
    gulp.src(['includes/**/*.php',
              'assets/**/*.{js, css}',
              'gulpfile.js',
              'ninja-forms-videomail.php',
              'tests/*.php'])
        .pipe(plugins.todo())
        .pipe(gulp.dest('./'))
})

// just builds assets once, nothing else
gulp.task('default', ['css', 'js', 'todo'])
