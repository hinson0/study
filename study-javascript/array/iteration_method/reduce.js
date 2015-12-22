'use strict';

// reduce的callback有4个参数，上一次的值，当前元素值，当前元素索引值，数组

// 如果提供了initValue，那么上一次的值为initValue
let arr = [1, 2, 3, 4];
let result = arr.reduce((previousValue, currentValue) => {
  // previousValue的值为10
  return previousValue + currentValue; // 10 + 1 + 2 + 3 + 4
}, 10);
console.log(result); // 20

// 如果没有提供initValue，那么数组的第一个值为initValue。这样数组的callback变回少调用一次。因为数组第一个元素的值不被调用
let result2 = arr.reduce((previousValue, currentValue) => {
  return previousValue + currentValue; // 这个函数实现了，所有函数的值相加 1 + 2 + 3 + 4 = 10
});
console.log(result2);

// 将二维数组铺平
let arr2 = [[1, 2], [3, 4], [5, 6]];
let result3 = arr2.reduce((previous, current) => {
  return previous.concat(current);
});
console.log(result3); // [1, 2, 3, 4, 5, 6,]

// reduceRight方向是从右到左，reduce是从左到右
let result4 = arr2.reduceRight((prev, current) => {
  return prev.concat(current);
});
console.log(result4); // [5, 6, 3, 4, 1, 2]
