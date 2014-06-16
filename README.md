# grunt-sh

> Grunt task for executing commands in a shell and attaching to terminal by default.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
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

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.1.0 - Initial release
