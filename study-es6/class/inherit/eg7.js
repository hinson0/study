'use strict';

class A {

}

console.log(A.__proto__ === Function.prototype); // true

/**
 * 解释下
 * 
 * 类A 本质实际是一个function A() {} 为Function类的一个实例
 *
 * A.__proto__ === Function.prototype 语义理解为: 实例A的原型为Function的prototype 这个和eg5.js中后面2个console.log结果是一样的:
 *
 * 参考下面的es5代码，可能好理解一点
 */

// var A = new Function();
// console.log(A.__proto__ === Function.prototype);
