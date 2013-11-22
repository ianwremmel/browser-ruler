module.exports = (grunt) ->

  require('load-grunt-tasks')(grunt)

  grunt.registerTask 'default', [
    'clean'
    'jshint'
    'copy'
    'image_resize'
  ]

  grunt.initConfig
    clean:
      dist: [
        'dist/**/*'
      ]

    jshint:
      options:
        jshintrc: '.jshintrc'
      src: [
        'src/scripts/**/*.js'
      ]

    copy:
      dist:
        expand: true
        cwd: 'src'
        src: [
          '_locales/**/*'
          'images/icon-48.png'
          'manifest.json'
          'scripts/**/*.js'
          'styles/**/*.css'
        ]
        dest: 'dist'

      vendor:
        files:
          'dist/scripts/zepto.js': 'bower_components/zepto/zepto.js'

    # TODO 128px image
    image_resize:
      options:
        overwrite: true
      favicon:
        options:
          width: 16
          height: 16
        files:
          'dist/images/icon-16.png': 'src/images/icon-64.png'
      standard:
        options:
          width: 19
          height: 19
        files:
          'dist/images/icon-19.png': 'src/images/icon-64.png'
      retina:
        options:
          width: 38
          height: 38
        files:
          'dist/images/icon-38.png': 'src/images/icon-64.png'

    watch:
      src:
        files: [
          'src/**/*'
        ]
        tasks: [
          'default'
        ]
