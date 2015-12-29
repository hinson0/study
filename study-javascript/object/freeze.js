'use strict';

let obj = {
  p: 1,
  hello: function () {
    return 'hello';
  }
};

console.log(Object.getOwnPropertyDescriptor(obj, 'p')); // 都是true
console.log(Object.getOwnPropertyDescriptor(obj, 'hello')); // 都是true

Object.freeze(obj);
console.log(Object.isFrozen(obj));

console.log(Object.getOwnPropertyDescriptor(obj, 'p')); // writable: false, configurable: false
console.log(Object.getOwnPropertyDescriptor(obj, 'hello')); // writable: false, configurable: false

// 其中freeze,seal,preventExtensions
// freeze将configurable为false,wriatable为false
// seal将configurable为false
// preventExtensions不改变configurable以及writable
