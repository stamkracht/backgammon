module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();
  var dirs = [
                config.source.dest.css,
                config.source.dest.js,
                config.source.tmp
             ];

  gulp.task('clean', function(callback){

    config.del(dirs, callback);

  });


};