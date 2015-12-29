'use strict';

// 这个函数很颠覆我的认知啊
// 居然叫：指定原型对象和属性来创建一个新的对象
// 怎么理解呢，看下面的例子


let o = {}; // o.__proto__ === Object.prototype
// 上面等价这个
let o1 = Object.create(Object.prototype); // o1.__proto__ === Object.prototype


// console.log(o.__proto__ === Object.prototype);
// console.log(o1.__proto__ === Object.prototype);
