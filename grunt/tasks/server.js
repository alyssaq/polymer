module.exports = function (grunt) {
  grunt.registerTask('server', [
    'clean:server',
    'compass:server',
    'connect:livereload',
    'copy',
    'open',
    'watch'
  ]);
};

