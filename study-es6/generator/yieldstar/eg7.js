'use strict';

function *foo() {
  yield 1;
  return 2;
}

function *bar() {
  yield 'start';
  let val = yield *foo();
  console.log(val);
  yield 'end';
}

let it = bar();
console.log(it.next()); // value: start
console.log(it.next()); // value: 1 
console.log(it.next()); // 打印2, 并执行 value: end
console.log(it.next()); // value: undefined


