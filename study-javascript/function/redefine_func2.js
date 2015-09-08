/**
 * 重复定义函数
 */

test();
var test = function() {
    console.log(1);
}
test();
function test() {
    console.log(2);
}
test();

/**
 * 解释：
 *  function关键字在编译期执行。在编译期，第10行申明的函数test。因此在第5行调用，输出2
 *  var关键字在运行期执行。在运行期，第6行中，var test语句，覆盖了原先的test，因此在字符表中test就指向了第6行的代码 因此在第9行时，输出1，第13行输出1
 *
 */
