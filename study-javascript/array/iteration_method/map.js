'use strict';

let arr = [1, 2, 3];
let result = arr.map(value => value * 2);
console.log(result); // [2, 4, 6]

let str = 'hello world';
let result2 = Array.prototype.map.call(str, value => value).reverse().join(''); // 置反字符串
console.log(result2);

// 也可以通过Array.from实现
let result3 = Array.from(str).reverse().join('');
console.log(result3);
