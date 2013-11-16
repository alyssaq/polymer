module.exports = function (grunt) {
  grunt.registerTask('prod', [
    'build',
    'connect:production:keepalive',
    'open'
  ]);
};

