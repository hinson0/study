'use strict';

console.log('abc'.repeat(0)); // ''
console.log('abc'.repeat(1)); // abc
console.log('abc'.repeat(2)); // abcabc
console.log('abc'.repeat(2.5)); // abcabc

// 超出范围则异常
'abc'.repeat(-1); // invalid count value
