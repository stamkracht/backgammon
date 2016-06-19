module.exports = function(gulp){

  'use strict';


  return {
    // plugins.
    browsersync    :   require('browser-sync'),
    autoprefixer   :   require('autoprefixer'),
    del            :   require('del'),
    plugins        :   require('gulp-load-plugins')({
      rename: {}
    }),

    // temporary and destination directories.
    source: {
      tmp        : 'tmp/',
      dest: {
        css      : 'dest/css/',
        js       : 'dest/js/',
      }
    }
  };


};