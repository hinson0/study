'use strict';

function* foo() {
  yield 'hello';
}

function* bar() {
  let a = yield foo();
}

let it = bar();
console.log(it.next()); // value: {}, done: false
// console.log(it.next().value.next()); // yiled foo() 返回一个iterator因此it.next().value的值为iterator。因此在执行iterator.next()才可以拿到对应的值:
console.log(it.next()); // value: undefined, done: true
console.log(it.next()); // value: undefiend, done: true


function* foo2() {
  yield 'hello';
}

function* bar2() {
  let a = yield* foo2();
}

let it2 = bar2();
console.log(it2.next()); // value: hello, done: false 
console.log(it2.next()); // value: undefined, done: ture   
console.log(it2.next()); // value: undefined, done: true 


