'use strict';

function *foo() {
  yield 'hello';
  return 'world';
}

function *test() {
  let a = yield foo;
}

let it = test();
console.log(it.next()); // value:function foo, done: false 
console.log(it.next()); // value:undefined done:true
console.log(it.next()); // value:undefined done:true


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
