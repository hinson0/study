'use strict';

// 访问数组的元素
// arr['2'] 等同于 arr[2]，因为js内部会把2自动toString为'2'
// 但是02是和2不相同的，因为'02'与'2'是2个字符串

let arr = [1, 2, 3];
console.log(arr['2']); // 3
console.log(arr[2]); // 3
console.log(arr['02']); // undefined

console.log(arr[2] === arr['2']); // true
console.log(arr['2'] === arr['02']); // false
