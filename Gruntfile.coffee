module.exports = (grunt) ->
  require('time-grunt')(grunt)
  require('load-grunt-tasks')(grunt)

  grunt.initConfig
    clean:
      dist: [
        'dist/**/*'
      ]

    compress:
      dist:
        options:
          archive: 'ruler.zip'
        files: [
          expand: true
          cwd: 'dist'
          src: '**/*'
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

    eslint:
      target: ['src/**/*.js']

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
          'build'
        ]

  grunt.registerTask 'build', [
    'clean'
    'eslint'
    'copy'
    'image_resize'
  ]

  grunt.registerTask 'default', [
    'build'
    'compress'
  ]
