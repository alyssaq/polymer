module.exports = function (grunt) {
  grunt.registerTask('prod', [
    'build',
    'open',
    'connect:production:keepalive'
  ]);
};

