#!/usr/bin/env node

'use strict';

let program = require('commander');

program
  .version('1.0.0')
  .command('install [name]', 'install one or more packages', {isDefault: true})
  .command('list', 'list packages installed')
  .parse(process.argv)
  
