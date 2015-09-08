var name = 'out';
var Obj = {
	name: 'yzb',
	get: function () {
		return function () {
			console.log(this.name);
		}
	}
};

var result1 = Obj.get();
result1();


/**
 * 这段代码请在chrome下运行，或者在node的命令行下运行
 */
