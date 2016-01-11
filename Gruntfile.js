module.exports = function(grunt) {
   grunt.initConfig({
      coffee: {
         compile: {
            files: {
               'coffee.js': 'coffee.coffee'
            }
         }
      }
   });
   grunt.loadNpmTasks('grunt-contrib-coffee');
   grunt.registerTask('default', 'Log some stuff.', ['coffee']);

};
