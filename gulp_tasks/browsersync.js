module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();

  gulp.task('browsersync', function(){

    config.browsersync({
      server: true,
      logPrefix: 'Backgammon',
      logConnections: true,
    });

  });


};