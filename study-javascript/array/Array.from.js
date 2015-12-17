'use strict';

// 将一个像数组对象/可迭代对象转换为真正的数组
// 可迭代的对象有:set/map
// 像数组对象：对象拥有length属性，以及索引元素，如string,object等

// string
let str = '123';
// console.log(Object.keys(str)); // 0,1,2
let strArr = Array.from(str); // [1, 2, 3]
console.log(strArr);

// array-like objects:arguments
function f() {
  console.log(arguments.toString());
  return Array.from(arguments);
}

console.log(f(1, 2, 3)); // [1, 2, 3]

// Set
let s = new Set();
s.add(1);
s.add('hello');
s.add('world');
let sArr = Array.from(s);
console.log(sArr);

// Map
let m = new Map();
m.set('foo', 'bar');
m.set('foo2', 'bar2');
let mArr = Array.from(m);
console.log(mArr);

// arg:mapFunction
let newArray = Array.from([1, 2, 3], v => v + 1); // 2, 3, 4
console.log(newArray);

let newArray2 = Array.from({length: 5}, (v, k) => k); // 只输出key作为新的数组 
console.log(newArray2);

// 如果是obj呢？
let obj = {hello: 'world', 'ddd': 222};
let objArray = Array.from(obj);
console.log(objArray); // []

// 如果是这样的obj呢
let obj2 = {'0': 0, '1': 1};
let obj2Array = Array.from(obj2);
console.log(obj2Array); // 一样是[]


