'use strict';

let fs = require('fs');

// fs.readFile('1.txt', 'utf-8', function (err, content) {
//   console.log(content);
// });

function Thunk(fn) {
  return function () {
    let args = Array.prototype.slice.call(arguments);
    return function (done) {
      args.push(done);
      fn.apply(this, args);
    }
  }
}

let readFile = Thunk(fs.readFile);
// console.log(readFileThunk);
let readFileThunk = readFile('1.txt', 'utf-8');
readFileThunk(function (err, content) {
  console.log(content);
});

