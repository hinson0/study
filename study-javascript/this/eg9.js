'use strict';

var foo = {
	bar: function () {
		console.log(this);
	}
};

foo.bar(); // 引用类型, this为foo
(foo.bar)(); // 引用类型,this为foo

(false || foo.bar)(); // undefined
(foo.bar = foo.bar)(); // undefined
(foo.bar, foo.bar)(); // undefined
