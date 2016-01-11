module.exports = function(grunt) {
   grunt.initConfig({
      cssmin: {
         options: {
            shorthandCompacting: false,
            roundingPrecision: -1
         },
         target: {
            files: {
               'output.css': ['app.css']
            }
         }
      }
   });
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.registerTask('default', 'Log some stuff.', ['cssmin']);

};
