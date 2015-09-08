(function () {
	console.log(this);
})();

/**
 * 在()前面不为引用类型的时候，那么this=null，在es5中，为null时会被自动设置为global
 *
 * 严格模式下，this为undefined
 */


