/**
 * this code is used to introduce VO 
 */

function foo(x, y, z) {
  console.log(x); // 1
  var x = 10;

	var a = 1;

	var y = 5;
	function y() {
		console.log(1);
	}
}

foo(1, 2);

/**
 * VO:variable object
 * 
 * When entering the execution context(before code is executed), VO already contains the following attributes.
 *
 * VO(function foo) = {
 * 	x: 1,
 * 	z: undefined
 *	a: 1,
 *	y: function() {},
 * }
 *
 */
