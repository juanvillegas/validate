var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

var PLUGIN_NAME = 'jquery.validate';

gulp.task('compress', function() {
    gulp.src('src/' + PLUGIN_NAME + '.js')
        .pipe(uglify({
            mangle: false
        }))
        .pipe(rename(PLUGIN_NAME + '.min.js'))
        .pipe(gulp.dest('dist'))
});