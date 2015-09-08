'use strict';

let co = require('co');

co(function* () {
  var result = yield Promise.resolve(true);
  return result;
}).then(function (value) {
  console.log(value);
}, function (err) {
  console.err(err.stack);
});

