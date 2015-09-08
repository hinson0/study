function foo() {
	console.log(this.bar);
}

var x = {bar: 10};
var y = {bar: 20};

x.test = foo;
y.test = foo;

x.test(); // 10
y.test(); // 20

/**
 * 调用方式动态确定this值的经典例子
 */
