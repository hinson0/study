'use strict';

function* test() {
  yield* [1, 2, 3];
}

let it = test();
console.log(it.next());
console.log(it.next());
console.log(it.next());
