var x = 10;

function foo() {
	var y = 20;
	var barFn = Function('console.log(x); console.log(y);');

	barFn();
}

foo(); // x：10, y报错，提示y未定义

/**
 * 通过函数构造函数(Function Constructor)构建的函数，其[[Scope]]总是全局对象，因此通过这类构造出的函数，只能创建全局的闭包
 */
