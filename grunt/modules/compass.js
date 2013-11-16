module.exports = {
  options: {
    sassDir: '<%= source %>/styles',
    cssDir: '.tmp/styles',
    imagesDir: '<%= source %>/images',
    javascriptsDir: '<%= source %>/scripts',
    fontsDir: '<%= source %>/styles/fonts',
    importPath: '<%= source %>/bower_components',
    relativeAssets: true
  },
  production: {},
  server: {
    options: {
      debugInfo: true
    }
  }
};