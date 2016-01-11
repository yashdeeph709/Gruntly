module.exports = function(grunt) {
   grunt.initConfig({
      uglify: {
         my_target: {
            files: {
               'dest/output.min.js': ['app.js']
            }
         }
      }
   });
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.registerTask('default', 'Log some stuff.', ['uglify']);

};
