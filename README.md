# grunt-sh
[![NPM](https://nodei.co/npm/grunt-sh.png)](https://nodei.co/npm/grunt-sh/)

[![Build Status](https://travis-ci.org/tsertkov/grunt-sh.svg?branch=master)](https://travis-ci.org/tsertkov/grunt-sh)
[![Coverage Status](https://img.shields.io/coveralls/tsertkov/grunt-sh.svg)](https://coveralls.io/r/tsertkov/grunt-sh?branch=master)
[![David Status](https://david-dm.org/tsertkov/grunt-sh.png)](https://david-dm.org/tsertkov/grunt-sh) 

> Grunt task for executing commands in a shell and attaching to terminal by default.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```sh
npm install grunt-sh --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sh');
```

## The "sh" task

### Overview
In your project's Gruntfile, add a section named `sh` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  sh: {
    options: {
      // Task-specific child_process.spawn() options go here.
    },
    your_target1: "echo this is target1 shell command",
    your_target2: {
      options: {
        // Target-specific child_process.spawn() options go here.
        env: {
          MY_VAR: "my_value"
        },
        cwd: "/home"
      },
      cmd: "echo $MY_VAR && pwd"
    },
    your_target3: "bash"
  },
});
```

### Options

Options are passed unmodified to [exec-sh](https://github.com/tsertkov/exec-sh) which is passing them to [child_process.spawn()](http://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options).

#### options.cwd
Type: `String`

Current working directory of the child process

#### options.stdio
Type: `Array|String`
Default: `inherit`

Child's stdio configuration. By default stdio streams will be forwarded.

#### options.env
Type: `Object`

Environment key-value pairs

#### options.detached
Type: `Boolean`

The child will be a process group leader.

#### options.uid
Type: `Number`

Sets the user identity of the process. (See setuid(2).)

#### options.gid
Type: `Number`

Sets the group identity of the process. (See setgid(2).)

## Code Coverage
Code coverage report for all files is [available here](https://s3.eu-central-1.amazonaws.com/tsertkov-artifacts/grunt-sh/master/coverage/lcov-report/index.html).

## License
The MIT License (MIT)