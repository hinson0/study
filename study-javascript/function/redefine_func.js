/**
 * 重复定义函数
 */

test();
function test() {
    console.log(1);
}
test();
function test() {
    console.log(2);
}
test();

/**
 * 解释
 *  全部都输出2
 *  因为：function关键字在编译期执行，在编译期间时，第2个test将第1个覆盖。因此第1个test类似形同虚设
 *  上述代码可以理解为：
 */

function test() {
    console.log(2);
}
test();
test();
test();
 


