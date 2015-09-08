'use strict';

let co = require('co');

co(function* () {
  let a = Promise.resolve(1);
  let b = Promise.resolve(2);
  let c = Promise.resolve(3);

  let res = yield [a, b, c];
  console.log(res);
}).catch(function (err) {
  console.error(err.stack);
});
