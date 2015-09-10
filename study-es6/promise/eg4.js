'use strict';

let fs = require('fs');
let readFile = new Promise(function (resolve, reject) {
  fs.readFile('./1.txt', 'utf-8', function (err, content) {
    if (err) {
      reject(err);
    } else {
      resolve(content);
    }
  });
});

readFile
  .then(function (content) {
    console.log(content);
  })
  .catch(function (err) {
    console.error(err);
  });


