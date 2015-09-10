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

let g = function *() {
  try {
    let file1 = yield readFile('./1.txt');
    let file2 = yield readFile('./2.txt');
    let file3 = yield readFile('./3.txt');
    console.log(file1);
    console.log(file2);
    console.log(file3);
  } catch (e) {
    console.error('generator error');
    console.error(e.stack);    
  }
}

function run(generator) {
  let iterator = generator();

  function go(result) {
    console.log(result);
    if (result.done) {
      return result.value;
    }
    return result.value
      .then(function (value) {
        go(iterator.next(value));
      })
      .catch(function (err) {
        // console.log('go error');
        // console.error(err);
        go(iterator.throw(err));
      });
  }

  go(iterator.next());
}

run(g);
