module.exports = {
  options: {
    jshintrc: '.jshintrc'
  },
  build: [
    'Gruntfile.js',
    '*.json',
    'grunt/{,*/}*.js'
  ],
  test: [
    'test/spec/{,*/}*.js'
  ],
  app: [
    '<%= source %>/scripts/{,*/}*.js',
    '!<%= source %>/scripts/vendor.js',
    '!<%= source %>/scripts/vendor/*'
  ]
};