'use strict';

class A {

}

class B extends A  {

}

console.log(B.__proto__ === A); // true
console.log(B.prototype.__proto__ === A.prototype); // true

console.log(A.__proto__ === Function.prototype); // true
console.log(A.prototype.__proto__ === Object.prototype); // true

/**
 * B.__proto__ === A => 对象B的原型为类A
 * B.prototype.__proto__ === A.prototype => 类B的原型为类A的prototype
 *
 * A.__proto__ === Function.prototype => 对象A的原型为Function的prototype
 * A.prototype.__proto__ === Object.prototype => 类A的原型是Object的prototype
 */
