'use strict';

function *foo() {
  yield 'hello';
  return 'world';
}

function *test() {
  let a = yield foo;

  console.log(a);
}

let it = test();
console.log(it.next());
console.log(it.next());
console.log(it.next());


// function *bar() {
//   yield 'hello';
//   return 'world';
// }
// 
// console.log(typeof bar);
// 
// let co = require('co');
// co(function *() {
//   console.log(1);
//   let a = yield bar;
//   let b = yield bar;
//   let c = yield bar;
// 
//   console.log(a);
//   console.log(b);
//   console.log(c);
// });
