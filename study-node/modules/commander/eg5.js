#!/usr/bin/env node

'use strict';

let commander = require('commander');

commander
  .version('0.0.1')
  .option('-f --foo', 'enable foo')
  .option('-b --bar', 'enable bar')
  .option('-z --baz', 'enable baz')

commander.on('--help', function () {
  console.log('help help help');
});

commander.parse(process.argv);

console.log('stuff');
