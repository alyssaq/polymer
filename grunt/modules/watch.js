module.exports = function (grunt) {
  return {
    options: {
      nospawn: true,
      livereload: true
    },

    compass: {
      files: ['<%= source %>/styles/{,*/}*.{scss,sass}'],
      tasks: ['compass']
    },

    livereload: {
      options: {
        livereload: grunt.config.get('livereloadPort')
      },
      files: [
        '<%= source %>/*.html',
        '<%= source %>/elements/**/*.html',
        '{.tmp,<%= source %>}/styles/{,*/}*.css',
        '{.tmp,<%= source %>}/scripts/{,*/}*.js',
        '<%= source %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}'
      ]
    }
  };
};