'use strict';

let co = require('co');

co(function *() {
  let res = yield [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
  ];

  console.log(res);
}).catch(function (err) {
  console.error(err.stack);
});


co(function *() {
  let res = yield {
    1: Promise.resolve(1),
    2: Promise.resolve(2),
  };

  console.log(res);
}).catch(function (err) {
  console.error(err.stack);
});

