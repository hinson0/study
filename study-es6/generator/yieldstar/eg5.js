'use strict';

function* foo(time) {
  time = time || 0;
  if (time >= 5) {
    throw new Error('error');
  }
  console.log(time);
  time++;
  return yield foo(time);
}

function* bar() {
  yield 'start';
  yield* foo();
  yield 'end';
}

for (let value of bar()) {
  console.log(value);
}
