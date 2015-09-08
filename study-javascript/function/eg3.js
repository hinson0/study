var x = 10;

function foo() {
  var x = 20;
  var y = 30;

  var bar = Function('console.log(x); console.log(y);'); // x:10,y:undefined
  bar();
}

foo();

/**
 * 在node命令行下跑这个代码
 *
 * Function函数构造器构造的函数，其[[Scope]]属性只包含全局，因为想通过函数构造器去闭包除了全局的数据，是不可能的。
 */




