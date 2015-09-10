'use strict';

function push(array, ...items) {
  items.forEach(function (item) {
    array.push(item);
  });
}

var a = [];
push(a, 1, 2, 3);
console.log(a); // [1, 2, 3]

/**
 * 这个例子主要想演示 rest参数是一个数字，那么数组所有的方法它都是可以使用的
 */
