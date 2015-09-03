module.exports = function(grunt) {
  
  grunt.initConfig({
    execute: {
        target: {
            src: ['src/index.js']
        }
    }
  })
  
  grunt.loadNpmTasks('grunt-execute');
  
  grunt.registerTask('default', ['execute']);
};