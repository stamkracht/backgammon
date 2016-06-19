var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
 
gulp.task('build', function () {
  gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
  gulp.src('src/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('./dist'));
});
