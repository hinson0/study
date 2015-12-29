'use strict';

let obj = {
  p: 1
};

// obj有的属性
console.log(Object.getOwnPropertyNames(obj));

// obj的原型
console.log(obj.__proto__ === Object.prototype);

// 没有办法通过下面这个获取__proto__的描述符
// 因为obj上并没有属性__proto__，来自于原型罢了。可以理解为getOwnPropertyNames()得到的值，才能通过obj获取描述符
console.log(Object.getOwnPropertyDescriptor(obj, '__proto__')); // undefined
console.log(Object.getOwnPropertyDescriptor(obj, 'p')); // 都是true

// 只能通过这个
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
