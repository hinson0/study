/**
 * 不影响VO，说明我们无法访问到函数表达式
 *
 * 这就是我们常说的，使用()后，不会污染变量对象
 */

(function foo() {
  console.log(1);
});

foo(); // undefined


1, function bar() {
  console.log(1);
}

bar(); // undefined
