/**
 * 创建函数的三种方式
 *
 *  函数申明
 *  函数表达式
 *  函数构造器
 */

// 函数申明
function foo() {
  console.log(1);
}

// 函数表达式
var bar = function () {
  console.log(1);
}

// 函数构造器
var baz = Function('console.log(1);');

foo();
bar();
baz();



