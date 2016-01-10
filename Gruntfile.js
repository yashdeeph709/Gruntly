module.exports = function(grunt) {
   grunt.initConfig({
      sass: {
         dist: {
            files: {
               'screen.css': 'screen.scss'
            }
         }
      }
   });
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.registerTask('default', 'Log some stuff.', ['sass']);

};
