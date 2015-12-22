'use strict';

let arr = [1, 2, 10, 30];

// find寻找到第一个满足条件的，并返回，否则返回undefined
let result = arr.find(value => value >= 3);
console.log(result); // 10


// findIndex寻找到第一个满足条件的，
let result2 = arr.findIndex(value => value >= 3); // 返回10对应的索引值，2
console.log(result2);
