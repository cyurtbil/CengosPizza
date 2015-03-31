'use strict';

module.exports = function(grunt) {

// Initial configuration
// ========================================================
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: { // task name
        options: {
          port: '8000',
          protocol: 'http',
          hostname: 'localhost',
          base: 'app',
          keepalive: true,
          livereload: true,
          open: true,
          middleware: function(connect) {
            return [
              connect().use('/bower_components', connect.static('./bower_components')),
              connect.static('app')
            ];
          }
        }
      }
    },
    wiredep: {
      task: {
        src: ['app/index.html'],
      }
    },
    watch: {
      options: {
        livereload: true
      },
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      styles: {
        files: ['app/css/main.css', 'app/css/partials/*.css'],
        options: {
          livereload: true
        }
      }
    },
    karma: {
      unit: {
        configFile: 'test/pizza.conf.js',
        options: {
          files: [
          '**.spec.js'
          ]
        },
        autoWatch: true
      }
    }
  });

// Loading npm tasks
// ========================================================
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');
// ========================================================

// Register npm tasks
// ========================================================
  grunt.registerTask('default', ['connect', 'wiredep', 'watch', 'karma']);
// ======================================================== 
};