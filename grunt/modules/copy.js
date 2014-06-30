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
        'images/{,*/}*.{webp,gif}'
      ]
    }]
  }
};