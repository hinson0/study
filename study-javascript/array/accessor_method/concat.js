'use strict';

let obj = {a: 1};
let result = [1, 2].concat(obj);
console.log(result); // 1, 2, {a: 1} 

obj.a = 2;

console.log(result);
