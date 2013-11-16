module.exports = {
  production: {
    options: {
      /*removeCommentsFromCDATA: true,
      // https://github.com/yeoman/grunt-usemin/issues/44
      //collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeOptionalTags: true*/
    },
    files: [{
      expand: true,
      cwd: '<%= source %>',
      src: '*.html',
      dest: '<%= production %>'
    }]
  }
};