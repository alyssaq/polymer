module.exports = {
  production: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= source %>',
      dest: '<%= production %>',
      src: [
        '*.{ico,txt}',
        'elements/**',
        'lib-elements/**',
        'images/{,*/}*.{webp,gif}'
      ]
    }]
  }
};