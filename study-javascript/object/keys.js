'use strict';

let obj = {
  p: 1,
  hello: function () {
    return 'hello';
  }
};

Object.defineProperty(obj, 'world', {
  enumerable: false
});

// 输出可枚举的属性
console.log(Object.keys(obj)); // ['p', 'hello']

// 如果想拿到不可枚举的属性，用getOwnPropertyNames()
console.log(Object.getOwnPropertyNames(obj)); // ['p', 'hello', 'world']
