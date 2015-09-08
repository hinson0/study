var n = 100;
var Test = function () {
	var n = 9;
	return function () {
		console.log(n);
	}
};

var result = Test();
result();


