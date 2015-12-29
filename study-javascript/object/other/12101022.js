'use strict';

let obj = {};
Object.defineProperty(obj, 'hello', {
  enumerable: false, // 不能被枚举，使用Object.keys(obj)，是查看不到hello这个key的
  configurable: false, // 不能被配置，如果在使用definedProperty对hello这个key进行配置则会报错。
  writable: false, // 不能被重写。重写的话会报错
  value: 'world'
});

Object.defineProperty(obj, 'foo', {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 'bar'
});



console.log(obj.hello); // world
console.log(obj.foo); // bar
console.log(Object.keys(obj)); // ['foo']

// Object.defineProperty(obj, 'hello', {
//   enumerable: true,
//   configurable: true,
//   writable: false,
//   value: 'world'
// });

// Object.defineProperty(obj, 'xxx', {
//   configurable: true,
//   set: function() {
//   },
//   get: function() {
//     return 'yyy';
//   },
//   enumerable: true
// });
// 
// console.log(obj.xxx);
// obj.xxx = 111;
// console.log(obj.xxx);
