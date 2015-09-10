'use strict';

var p = Promise.resolve('Hello');
// console.log(p);
p.then(function (value) {
  console.log(value);
});
