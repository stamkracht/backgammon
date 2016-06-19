// require gulp.
var gulp = require('gulp');


// task for development.
gulp.task('default', ['css', 'js'], function () {
  gulp.start('watch');
});


// utility function that gets task modules.
function task(task){
  return require('./gulp_tasks/' + task)(gulp);
}


// all task modules.
task('clean');
task('css');
task('js');
task('kss');
task('browsersync');
task('watch');
