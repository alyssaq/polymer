module.exports = {
  production: {
    files: {
      '<%= production %>/styles/main.css': [
        '.tmp/styles/{,*/}*.css',
        '<%= source %>/styles/{,*/}*.css'
      ]
    }
  }
};