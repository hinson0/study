'use strict';

let arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3); // 目标：0。开始位置:3
console.log(arr); // 4, 5, 3, 4, 5

let arr1 = [1, 2, 3, 4, 5].copyWithin(0, 1); // 2, 3, 4, 5, 5
console.log(arr1);

let arr2 = [1, 2, 3, 4, 5].copyWithin(0, -2, -1); // 4, 2, 3, 4, 5
console.log(arr2);

let arr3 = [1, 2, 3, 4, 5].copyWithin(0, -3, -1); // 3, 4, 3, 4, 5
console.log(arr3);
