'use strict';

let arr = [1, 2, 3];
let arr1 = arr.slice(); // [1, 2, 3]
let arr2 = arr.slice(1); // [2, 3]


let obj = {a: 1};
let arr3 = [1, 2, 3, obj];
let arr4 = arr3.slice(); // 和arr3值相同
obj.a = 3;
// arr3,arr4的值都发生变化了


// 将array-like对象转换为数组
function list() {
  return Array.from(arguments);
  // return Array.prototype.slice.call(arguments); // 效果和Array.from()一样
}

let r = list(1, 2, 3); // [1, 2, 3]
console.log(r);
