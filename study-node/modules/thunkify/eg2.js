'use strict';

let thunkify = require('thunkify');
let fs = require('fs');
let co = require('co');

let readFile = thunkify(fs.readFile);
co(function* () {
  let content1 = yield readFile('1.txt', 'utf8');
  let content2 = yield readFile('2.txt', 'utf8');
  console.log(content1);
  console.log(content2);
});

