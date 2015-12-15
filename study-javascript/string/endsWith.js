'use strict';

let str = 'hello world';
console.log(str.endsWith('ld')); // true
console.log(str.endsWith('ld', str.length)); // true
console.log(str.endsWith('o', 5)); // true
