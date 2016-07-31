// TODO minify CSS task and deployment task

var gulp   = require('gulp')
var rename = require('gulp-rename')
var uglify = require('gulp-uglify')

gulp.task('js', function () {
    gulp.src('assets/js/videomail.js')
        .pipe(rename('videomail.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/min'))
})

gulp.task('watch', function() {
    gulp.watch('assets/js/*.js', ['js'])
})

gulp.task('default', ['js', 'watch'])
