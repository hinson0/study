'use strict';

// 字符串字面量与String Object的区别：字符串字面量返回string类型，而String Object返回object；JS会自动包装字符串字面量为String Object。以便在调用String Object方法时有效

let str = 'hello world';
let obj = new String('hello world');
let str2 = String('hello world');

console.log(typeof str); // string
console.log(typeof obj); // object
console.log(typeof str2); // object

console.log(str);
console.log(obj);
console.log(str2);

// 调用方法
console.log(str.charAt(1)); // 因为JS自动将字面量包装为String Object。因此字符串字面量可以调用String Object的方法
console.log(obj.charAt(1));
console.log(str2.charAt(1));

// 对比
console.log(str === str2); // true
console.log(str === obj); // false

// String Object转换字符串字面量
// valueOf与toString 是一个API
console.log(obj.valueOf() === str); // true
console.log(obj.toString() === str); // true
