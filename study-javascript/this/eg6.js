var foo = function () {
	return this;
};

console.log(foo()); // global

// 请特别看以下这个调用方式，非常有意思
// 也特别现实出了：this由函数调用者提供，不同形式激活同一个函数this值也不同
console.log(foo === foo.prototype.constructor); // true ，这是true，但是下面却很有意思

console.log(foo.prototype.constructor()); // 用这个方式来触发foo这个函数，得到的结果为foo.prototype, false

/**
 * 这段代码建议在chrome上运行，细节看的更清晰
 */


