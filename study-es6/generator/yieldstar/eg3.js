'use strict';

// let delegatedIterator = (function* () {
//   yield 'Hello!';
//   yield 'Bye!';
// })();
// 
// let delegatingIterator = (function* () {
//   yield 'Greetings!';
//   yield* delegatedIterator;
//   yield 'Ok, bye.';
// })();
// 
// for(let value of delegatingIterator) {
//   console.log(value);
// }

let fs = require('fs');

function *gen1() {
  yield 'Hello';
  yield 'World';
}

function *gen2() {
  yield 'Foo';
  yield* gen1();
  yield 'Bar';
}

for (let value of gen2()) {
  console.log(value);
}
