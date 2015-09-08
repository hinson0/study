'use strict';

var v = {
	x: 10,
	y: 20
};

with (v) { // 在strict模式下，禁止使用with语句
	console.log(x);
	console.log(y);
}
