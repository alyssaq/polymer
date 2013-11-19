module.exports = function (grunt) {
  var lrSnippet = require('connect-livereload')(
                  {port: grunt.config.get('livereloadPort')});
  var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
  };

  return {
    options: {
      port: '<%= port %>',
      // change this to '0.0.0.0' to access the server from outside
      hostname: 'localhost'
    },
    livereload: {
      options: {
        middleware: function (connect) {
          return [
            lrSnippet,
            mountFolder(connect, '.tmp'),
            mountFolder(connect, grunt.config.get('source'))
          ];
        }
      }
    },
    test: {
      options: {
        middleware: function (connect) {
          return [
            mountFolder(connect, '.tmp'),
            mountFolder(connect, 'test'),
            mountFolder(connect, grunt.config.get('source'))
          ];
        }
      }
    },
    production: {
      options: {
        middleware: function (connect) {
          return [
            mountFolder(connect, grunt.config.get('production'))
          ];
        }
      }
    }
  };
};