module.exports = function (grunt) {
  grunt.registerTask('test', [
    'clean:server',
    'compass',
    'connect:test',
    'mocha'
  ]);
};

