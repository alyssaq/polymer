'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    require('time-grunt')(grunt);

    // configurable paths
    var yeomanConfig = {
        source: 'src',
        production: 'app'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            options: {
                nospawn: true,
                livereload: true
            },
        
            compass: {
                files: ['<%= yeoman.source %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass']
            },
            
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '<%= yeoman.source %>/*.html',
                    '<%= yeoman.source %>/elements/**/*.html',
                    '{.tmp,<%= yeoman.source %>}/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.source %>}/scripts/{,*/}*.js',
                    '<%= yeoman.source %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, yeomanConfig.source)
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test'),
                            mountFolder(connect, yeomanConfig.source)
                        ];
                    }
                }
            },
            production: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, yeomanConfig.production)
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            production: ['.tmp', '<%= yeoman.production %>/*'],
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.source %>/scripts/{,*/}*.js',
                '!<%= yeoman.source %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://localhost:<%= connect.options.port %>/index.html']
                }
            }
        },
    
        compass: {
            options: {
                sassDir: '<%= yeoman.source %>/styles',
                cssDir: '.tmp/styles',
                imagesDir: '<%= yeoman.source %>/images',
                javascriptsDir: '<%= yeoman.source %>/scripts',
                fontsDir: '<%= yeoman.source %>/styles/fonts',
                importPath: '<%= yeoman.source %>/bower_components',
                relativeAssets: true
            },
            production: {},
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        
        useminPrepare: {
            html: '<%= yeoman.source %>/index.html',
            options: {
                dest: '<%= yeoman.production %>'
            }
        },
        usemin: {
            html: ['<%= yeoman.production %>/{,*/}*.html'],
            css: ['<%= yeoman.production %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= yeoman.production %>']
            }
        },
        imagemin: {
            production: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.source %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.production %>/images'
                }]
            }
        },
        cssmin: {
            production: {
                files: {
                    '<%= yeoman.production %>/styles/main.css': [
                        '.tmp/styles/{,*/}*.css',
                        '<%= yeoman.source %>/styles/{,*/}*.css'
                    ]
                }
            }
        },
        htmlmin: {
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
                    cwd: '<%= yeoman.source %>',
                    src: '*.html',
                    dest: '<%= yeoman.production %>'
                }]
            }
        },
        copy: {
            production: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.source %>',
                    dest: '<%= yeoman.production %>',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        'elements/**',
                        'lib-elements/**',
                        'images/{,*/}*.{webp,gif}'
                    ]
                }]
            }
        },
        bower: {
            all: {
                rjsConfig: '<%= yeoman.source %>/scripts/main.js'
            }
        }
    });


    grunt.registerTask('server', function (target) {
        if (target === 'production') {
            return grunt.task.run(['build', 'open', 'connect:production:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'compass:server',
            'connect:livereload',
            'copy',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'compass',
        'connect:test',
        'mocha'
    ]);

    grunt.registerTask('build', [
        'clean:production',
        'compass:production',
        'useminPrepare',
        'imagemin',
        'htmlmin',
        'concat',
        'cssmin',
        'uglify',
        'copy',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
