module.exports = function (grunt) {
  grunt.registerTask('build', [
    'clean:production',
    'compass:production',
    'useminPrepare',
    'imagemin',
    'htmlmin',
    'concat',
    'cssmin',
    'uglify',
    'copy',
    'usemin',
    'clean:server'
  ]);
};

