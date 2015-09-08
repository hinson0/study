'use strict';

// 不定义constructor
class Foo {

}

var foo1 = new Foo();

console.log(foo1);

/**
 * es6中 在类中不定义constructor，也会默认添加constructor
 * 也就是说，上面的代码其实和如下的代码好是等价的
 *
 * class Foo {
 *  constructor() {
 *  
 *  }
 * }
 *
 */
