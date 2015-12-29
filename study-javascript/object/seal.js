'use strict';

// 是否密封。密封必然是不可拓展的（即isExtensible:true）

let obj = {
  p: 1,
  hello: function () {
    return 'hello';
  }
};

console.log(Object.getOwnPropertyDescriptor(obj, 'p'));
console.log(Object.getOwnPropertyDescriptor(obj, 'hello'));

Object.seal(obj);

console.log(Object.isSealed(obj));
console.log(Object.getOwnPropertyDescriptor(obj, 'p')); // configurable: false
console.log(Object.getOwnPropertyDescriptor(obj, 'hello')); // configurable: false

// 不影响修改属性。因为writable: true
// obj.p = 2;
// console.log(obj.p);
