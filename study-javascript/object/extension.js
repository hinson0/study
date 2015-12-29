'use strict';

let obj = {
  p: 1,
  hello: function () {
    return 'hello';
  }
};

console.log(Object.getOwnPropertyDescriptor(obj, 'p'));
console.log(Object.getOwnPropertyDescriptor(obj, 'hello'));

Object.preventExtensions(obj);

console.log(Object.getOwnPropertyDescriptor(obj, 'p'));
console.log(Object.getOwnPropertyDescriptor(obj, 'hello'));

// 不可以添加新属性了
// obj.world = 'world'; // 报预发错误


