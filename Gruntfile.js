module.exports = function(grunt) {
   grunt.initConfig({
      log: {
         foo: [1, 2, 3],
         bar: 'hello world',
         baz: false
      }
   });
   grunt.registerTask('foo', 'A sample task that logs stuff.', function(arg1, arg2) {
      if (arguments.length === 0) {
         grunt.log.writeln(this.name + ", no args");
      } else {
         grunt.log.writeln(this.name + ", " + arg1 + " " + arg2);
      }
   });
   grunt.registerMultiTask('log', 'Log stuff.', function() {
      grunt.log.writeln(this.target + ': ' + this.data);
   }); // A very basic default task.

   grunt.registerTask('default', 'Log some stuff.', ['log', 'foo:bar:mar']);

};
