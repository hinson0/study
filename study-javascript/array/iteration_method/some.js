'use strict';

// some检查元素，有一个元素检查返回true，则停止检查，并且返回true。否则返回False
let arr = [1, 2, 3];
let result = arr.some((value) => {
  if (value === 24) {
    return true;
  }
  console.log(value);
  return false;
});
console.log(result);


// every检查有一个返回False则停止检查，结果返回false，否则返回true
// 与some是相反
let result2 = arr.every(value => {
  if (value === 3) {
    return false;
  }
  console.log(value);
  return true;
});
console.log(result2);
