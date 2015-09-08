var x= 10;

function foo() {
	var y = 20;
	function bar() {
		var z = 30;
		console.log(x + y + z);
	}
	return bar();
}

foo(); // 60

/**
 * 作用域链，在bar中，寻找x,y变量是通过[[Scope]]来完成的。而[[Scope]]保存的是上层变量对象的层级链
 *
 * globalContext.VO = global = {
 *	x: 10,
 *	foo: <function>
 * }
 *
 * fooContext = {
 *	VO: {
 *		y:20,
 *		bar: <function>
 *	}
 *	this: ?,
 *	[[Scope]]: [
 *		globalContext.VO
 *	]
 * }
 *
 * barContext = {
 *	VO: {
 *		z:30
 *	},
 *	this: ?,
 *	[[Scope]]: [
 *		fooContext.VO,
 *		globalContext.VO
 *	]
 * }
 *
 */
