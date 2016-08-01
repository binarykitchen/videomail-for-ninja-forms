// TODO minify CSS task and deployment task

var gulp    = require('gulp')
var plugins = require('gulp-load-plugins')()

gulp.task('js', function () {
    gulp.src('assets/js/videomail.js')
        .pipe(plugins.rename('videomail.min.js'))
        .pipe(plugins.uglify())
        .pipe(gulp.dest('assets/js/min'))
})

gulp.task('watch', ['default'], function() {
    gulp.watch('assets/js/*.js', ['js'])
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
gulp.task('default', ['js', 'todo'])
