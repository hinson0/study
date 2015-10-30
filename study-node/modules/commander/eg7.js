#!/usr/bin/env node

'use strict';

let program = require('commander');
let colors = require('colors');

console.log(process.argv);

program
  .version('0.0.1')
  .option('-i, --integer <number>', 'an integer number', function (number, test) {
    console.log('output...', number, test); 
  }, 'hehe')
  .option('-b, --bar', 'output string bar', function () {
    console.log('output string bar...'); 
  })
  .command('get [url]', 'get url')
  .parse(process.argv)


// program.outputHelp(function (txt) {
//   return colors.red(txt);
// });
