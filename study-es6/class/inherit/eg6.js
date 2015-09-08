'use strict';

class A extends Object {

}

console.log(A.__proto__ === Object); //  true 对象A的原型为类Object
console.log(A.prototype.__proto__ === Object.prototype); // true 类A的原型为类Object的prototype

