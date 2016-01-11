module.exports = function(grunt) {
   grunt.initConfig({
      serve: {
         path: 'Angular-D3'
      },
      open: {
         dev: {
            path: 'http://127.0.0.1:9000/Angular-D3/index.html',
            app: 'chrome.exe'
         }
      }
   });
   grunt.loadNpmTasks('grunt-serve');
   grunt.loadNpmTasks('grunt-open');
   grunt.registerTask('default', 'Log some stuff.', ['open', 'serve']);

};
