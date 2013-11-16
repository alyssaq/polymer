'use strict';

module.exports = function (grunt) {
  // load all grunt tasks
  //require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
    configPath: 'grunt/modules',
    init: true,
    config: {
      base: grunt.option('base') || process.cwd(),
      source: 'src',
      production: 'app',
      port: 9000,
      livereloadPort: 35729
    }
  });

  grunt.loadTasks('grunt/tasks');
};
