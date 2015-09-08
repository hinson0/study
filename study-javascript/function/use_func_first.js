test(); // undefined is not a function 
var test = function() {
    console.log(1);
};

/**
 * 解释：
 *  在预编译期，test被初始化，值为undefined
 *  因此在执行期，即第1行代码去执行test()的时候，会提示undefined is not a function
 *  因为第2行的，为test变量赋值的行为是在执行期执行。
 *
 */
