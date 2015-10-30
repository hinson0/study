'use strict';

let thunkify = require('thunkify');
let fs = require('fs');

let readFile = thunkify(fs.readFile);
readFile('1.txt', 'utf-8')(function (err, content) {
  console.log(content);
});
