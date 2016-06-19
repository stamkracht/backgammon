module.exports = function(gulp){

  'use strict';

  
  var config = require('./config')();

  gulp.task('js', function () {

    gulp.src('src/js/**/*.js')
      .pipe(config.plugins.plumber())
      .pipe(config.plugins.sourcemaps.init())
        .pipe(config.plugins.concat('main.js'))
        .pipe(gulp.dest(config.source.tmp))
        .pipe(config.plugins.uglify())
        .pipe(config.plugins.rename({suffix: '.min'}))
      .pipe(config.plugins.sourcemaps.write('../../' + config.source.tmp))
      .pipe(gulp.dest(config.source.dest.js))
      .pipe(config.browsersync.reload({stream: true}));

  });


};