module.exports = {
  production: {
    files: [{
      expand: true,
      cwd: '<%= source %>/images',
      src: '{,*/}*.{png,jpg,jpeg}',
      dest: '<%= production %>/images'
    }]
  }
};