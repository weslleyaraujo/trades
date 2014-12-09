module.exports = function (grunt) {
  'use strict';

  // Load grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'app/assets/javascripts/*.js',
        'app/assets/javascripts/**/*.js',
      ]
    }
  });
};
