module.exports = function(grunt) {
   grunt.initConfig({
      jshint: {
         files: {
            src: ['abc.js']
         }
      }
   });
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.registerTask('default', 'Log some stuff.', ['jshint']);

};
