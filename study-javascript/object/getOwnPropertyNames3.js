'use strict';

// Object.keys() 返回对象自己的，可枚举的属性
// Object.getOwnPropertyNames() 返回对象自己的，可枚举/不可枚举的属性
//
// 会从原型链中拿属性的
// for...in 返回对象自己的，继承的，可枚举的属性

let str = 'hello'; // 有的属性有 0,1,2,3,4,length
console.log('这些属性都是str自身的属性');
console.log(str.hasOwnProperty(0));
console.log(str.hasOwnProperty(1));
console.log(str.hasOwnProperty(2));
console.log(str.hasOwnProperty(3));
console.log(str.hasOwnProperty(4));
console.log(str.hasOwnProperty('length')); // 不可枚举

console.log('判断是否可枚举');
console.log(str.propertyIsEnumerable(4));
console.log(str.propertyIsEnumerable('length'));

console.log('通过getOwnPropertyDescriptor获取更详细的描述符信息');
console.log(Object.getOwnPropertyDescriptor(str, 4));
console.log(Object.getOwnPropertyDescriptor(str, 'length'));

console.log('通过Object.keys(),返回对象自己的，可枚举的属性。即[0,1,2,3,4]');
console.log(Object.keys(str));

console.log('通过Object.getOwnPropertyNames()。返回对象自己的，可枚举的，不可枚举的属性。即[0,1,2,3,4,length]');
console.log(Object.getOwnPropertyNames(str));

console.log('通过for...in。返回对象自己的，继承的，可枚举的属性。即0,1,2,3,4。');
for (let prop in str) {
  console.log(prop);
}

// 上面的for...in 和 Object.keys看不出差别。因为str变量，从String继承下来的都是不可枚举的属性。所以也遍历不出个什么。下面这个例子可以看得出来。
console.log(Object.getOwnPropertyDescriptor(String.prototype, 'indexOf')); // enumerable: false
Object.defineProperty(String.prototype, 'indexOf', {
  enumerable: true
});
console.log('使用for...in。结果为:0,1,2,3,4,indexOf');
for (let prop in str) {
  console.log(prop);
}
console.log(Object.keys(str)); // 依旧[0,1,2,3,4]



