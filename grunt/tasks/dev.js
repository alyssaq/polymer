module.exports = function (grunt) {
  grunt.registerTask('dev', [
    'clean:server',
    'compass:server',
    'connect:livereload',
    'copy',
    'open',
    'watch'
  ]);
};

