'use strict';

let proto = Object.getPrototypeOf('abc'); // String.prototype
console.log(proto);
console.log(proto === String.prototype);


// setPrototypeOf(obj, prototype) 设置[[prototype]]属性

let obj = {
  p: 1
};
let prototype = {
  hello: function() {
    return 'hello';
  }
};
// Object.setPrototypeOf(obj, prototype);

// console.log(obj.hello());
// console.log(Object.getPrototypeOf(obj));

// 等价于
obj.__proto__ = prototype;
console.log(obj.hello());
console.log(Object.getPrototypeOf(obj));

