'use strict';

module.exports = function (grunt) {
  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
    configPath: 'grunt/modules',
    init: true,
    config: {
      //pkg: grunt.file.readJSON('package.json'),
      base: grunt.option('base') || process.cwd(),
      source: 'src',
      production: 'app',
      port: 9000,
      livereloadPort: 35729
    }
  });
  grunt.loadTasks('grunt/tasks');
};
