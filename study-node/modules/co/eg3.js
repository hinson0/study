'use strict';

let co = require('co');

co(function *() {
  try {
    yield Promise.reject(new Error('boom'));
  } catch (err) {
    console.error(err.message);
  }
}).catch(function (err) {
  console.error(err.stack);
});


