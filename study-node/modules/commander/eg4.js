#!/usr/bin/env node

'use strict';

let program = require('commander');

program
  .version('0.0.2')
  .arguments('<cmd> [env]')
  .action(function (cmd, env) {
    console.log(cmd);
    console.log(env);
  });

program.parse(process.argv);
    
