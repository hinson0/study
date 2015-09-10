'use strict';

let fs = require('fs');

function readFile(filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, 'utf-8', function (err, content) {
      if (err) {
        reject(err);
      } else {
        resolve(content);
      }
    });
  });
}

let gen = function *() {
  let file1 = yield readFile('./1.txt');
  let file2 = yield readFile('./2.txt');
  let file3 = yield readFile('./3.txt');

  // 这里处理file1, file2, file3
  console.log(file1);
  console.log(file2);
  console.log(file3);
}

function run(gen) {
  let iterator = gen();
  
  next(iterator.next());

  function next(result) {
    if (result.done) {
      return result.value;
    }
    return result.value.then(function (value) {
      next(iterator.next(value));
    });
  }
}

run(gen);
