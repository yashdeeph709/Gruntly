module.exports = function(grunt) {
   grunt.initConfig({
      serve: {
         path: 'Angular-D3'
      }
   });
   grunt.loadNpmTasks('grunt-serve');
   grunt.registerTask('default', 'Log some stuff.', ['serve']);

};
