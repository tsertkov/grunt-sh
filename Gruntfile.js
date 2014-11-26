/*
 * grunt-sh
 * https://github.com/tsertkov/grunt-sh
 *
 * Copyright (c) 2014 Aleksandr Tsertkov
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  grunt.initConfig({
    // All subtasks here test certan "sh" task functionality
    sh: {
      echo: "echo OK",
      echo_test_arguments: 'grunt sh:echo:hoy | grep -q OK && echo OK',
      custom_options: {
        options: {
          env: {
            GRUNT_SH: "xxx"
          }
        },
        cmd: '[ "$GRUNT_SH" = "xxx" ] && echo OK'
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('test', ['sh']);
};
