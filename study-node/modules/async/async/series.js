var async = require('async');

async.series([
  function (callback) {
    console.log(1);
		callback(null, 2);
  },
  function (callback) {
    console.trace(2);
		callback(null);
  },
	function () {
		console.log(3);
	}
], function (err, result) {
	console.log(result);
});

/**
 * 一个测试的例子，我用来检查，当array的function不用callback函数时，后续的函数执行情况以及输出的结果
 *   结果：当其中一个function不调用callback则下面的函数不执行，即出错
 *
 */
