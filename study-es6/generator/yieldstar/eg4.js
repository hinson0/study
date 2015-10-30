'use strict';

function* foo() {
  yield 'foo';
}

function* bar() {
  yield 'bar';
  yield* foo();
  yield 'baz';
}

for (let value of bar()) {
  console.log(value);
}
