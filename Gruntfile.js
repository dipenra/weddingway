module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/css/main.css': 'public/scss/main.scss',
          'public/css/reset.css': 'public/scss/reset.scss'
        }
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'public/css/default.min.css': ['public/css/reset.css', 'public/css/main.css']
        }
      }
    },
    watch: {
      scss: {
        files: ['public/scss/**/*.scss'],
        tasks: ['sass', 'cssmin']
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['sass', 'cssmin']);
};