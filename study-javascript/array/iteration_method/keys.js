'use strict';

// keys与values都是返回iteration。通过for...of来遍历或者.next拿到值

let arr = [1, 2, 3, 4];
// let it = arr.values(); // 返回数组所有元素的iteration(迭代器) 居然不存在这个方法。。。无语
// let first = it.next(); // {value: 1, done: false}
// console.log(first);
// console.log(first.value); // 1
// for (let value of arr.values()) {
//   console.log(value); 
// }

let keys = arr.keys(arr);
// let firstKey = keys.next();
// console.log(firstKey);
// console.log(firstKey.value); // 0

// 不知道这块会不会重复多次调用arr.keys这个方法
for (let key of arr.keys(arr)) {
  console.log(key);
}
