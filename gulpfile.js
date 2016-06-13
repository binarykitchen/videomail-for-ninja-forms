/**
 * Gulpfile
 *
 * Rename and Minify JavaScript..
 *
 * Install Command:
 * npm install gulp gulp-rename gulp-uglify
 */

var gulp   = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('js', function () {
    gulp.src('assets/js/videomail.js')
        .pipe(rename('videomail.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/min'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('assets/js/*.js', ['js']);
});

// Default Task
gulp.task('default', ['js', 'watch']);
