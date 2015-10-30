'use strict';

function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  return 5;
}

for (let v of foo()) {
  console.log(v);
}
