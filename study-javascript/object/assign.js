'use strict';

let a = 1;
let b = 2;
let c = 3;

let obj = {
  a
};

let cp = Object.assign({}, obj);
console.log(cp);


// 合并多个
let obj1 = {
  a
};
let obj2 = {
  b
};
let obj3 = {
  c
};

// let cpMany = Object.assign(obj1, obj2, obj3);
// console.log(cpMany);
// console.log(obj1); // 同时obj1也被改变

// 等价于
Object.assign(obj1, obj2, obj3);
console.log(obj1); // obj1的结果就是Object.assign返回的结果

/**
 * Object.assign(target, source1, source2, ...) 返回的结果就是target。所以target等于返回的结果 
 * 只拷贝可枚举的属性/方法
 */

let obj4 = {
  a,
  b,
  c,
  hello() {
    return 'hello';
  }
};
Object.defineProperty(obj4, 'world', {
  value: 'world',
  enumerable: false
});
Object.defineProperty(obj4, 'foo', {
  value: 'foo',
  enumerable: true,
  configurable: true,
  writable: true
});

let cp4 = Object.assign({}, obj4);
console.log(cp4);

// 在这里修改obj4，cp4不受影响
obj4.foo = 'foo1';
console.log(obj4);
console.log(cp4);
