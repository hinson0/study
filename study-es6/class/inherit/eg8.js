'use strict';

class A extends null {
  
}

console.log(A.__proto__ === Function.prototype); // true
console.log(A.prototype.__proto__ === undefined); // true

/**
 * https://github.com/tc39/ecma262/issues/22
 *
 * class extends null {} is a way to say class {} but with the restriction that the class's prototype object does not inherit from Object.prototype.
 * 这里有提到，class x extends null {} 表达的意思是 类的prototype将不从Object的prototype继承
 */


