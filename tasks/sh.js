/*
 * grunt-sh
 * https://github.com/tsertkov/grunt-sh
 *
 * Copyright (c) 2014 Aleksandr Tsertkov
 * Licensed under the MIT license.
 */

var execSh = require("exec-sh");

function sh(grunt){
  grunt.registerMultiTask("sh", "Execute command in a shell.", function(){
    var
      done = this.async(),
      args = [].slice.call(arguments),
      cmd = this.target,
      options = this.options({
        stdio: "inherit"
      });

    // override cmd with the one from config
    var config = grunt.config.get("sh." + cmd);
    if (typeof config === "string") {
      cmd = config;
    } else if (options.cmd) {
      cmd = options.cmd;
    }

    args = args.join(" ");
    cmd = options[cmd] || cmd;
    cmd = cmd + " " + args;

    execSh(cmd, options, function(err){
      done(!err);
    });
  });
}

module.exports = sh;
