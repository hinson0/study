'use strict';

let arr = [1, 2, 3];
let bool = true;
let foo = null;
let obj = {a: 1};
let test = JSON.stringify(arr);
console.log(test);
console.log(typeof test);

// 解析stringify的结果
let arr1 = JSON.parse(test);
console.log(arr1);
console.log(typeof arr1);
console.log(arr1[0]);

// 解析数组字符串
let arr2 = JSON.parse('[1, 2, 3]');
console.log(typeof arr2);
console.log(arr2[0]);

// 解析bool字符串
let bool2 = JSON.parse('true');
console.log(typeof arr2);
console.log(bool2);
