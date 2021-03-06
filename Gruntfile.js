var babel = require('rollup-plugin-babel');
var nodeResolve  = require('rollup-plugin-node-resolve');

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-rollup');

  grunt.initConfig({
    rollup: {
      options: {
        entry: "index.js",
        format: "umd",
        moduleName: "d3Arrow",
        plugins: [
          babel(), 
          nodeResolve({
            jsnext: true
          })
        ]
      },
      files: {
        'dest':'dist/d3Arrow.js',
        'src' : 'index.js'
      }
    },
    watch: {
      js: {
        options: {
          spawn: false,
        },
        files: ['src/**/*.js', "!dist/**/*", "!node_modules/**/*"],
        tasks: ['rollup']
      }
    }, 
  });

  grunt.registerTask('default', ['rollup']);
}