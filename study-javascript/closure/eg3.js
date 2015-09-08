var Counter = function() {
	var count = 0;
	var get = function() {
		count++;
		return count;
	};
	return get;
}

var counter1 = Counter();
var result = counter1();
console.log(result);



