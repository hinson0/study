'use strict';

let a = '123'.charAt(1);
console.log(a);
console.log('123'[1]);

// '123'[1] = 2; // error
// console.log(Object.getOwnPropertyDescriptor('123', '1')); // value: 2, writable:false, enumerable: true, configurable: false

console.log('1'.charAt(1)); // ''
