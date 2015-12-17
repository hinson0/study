'use strict';

// length的增加，减小会改变数组本身的内容

let arr = [1, 2, 3, 4]; // length = 4
console.log(arr.length); // 4
arr.length = 2;
console.log(arr); // [1, 2] 因为length减小为2，所以arr的元素也只保持了2个



