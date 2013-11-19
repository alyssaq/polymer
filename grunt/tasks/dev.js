module.exports = function (grunt) {
  grunt.registerTask('dev', function (target) {
    if (target === 'production') {
      return grunt.task.run(['build', 'open', 'connect:production:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'compass:server',
      'connect:livereload',
      'copy',
      'open',
      'watch'
    ]);
  });
};


