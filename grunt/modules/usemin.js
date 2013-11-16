module.exports = {
  html: ['<%= production %>/{,*/}*.html'],
  css: ['<%= production %>/styles/{,*/}*.css'],
  options: {
    dirs: ['<%= production %>']
  }
};