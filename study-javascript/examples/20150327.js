
var a = 1;
function test() {
    a = a + 2;
    return a;
}

console.log(test()); // 不是 3 而是5

function test() {
    a = a + 4;
    return a;
}

console.log(test()); // 9


/**
 * function关键字 在编译期间运行 第二个test将第一个test覆盖了，也就是说第一个test形同虚设
 * 上述代码可以理解成如下
 * so easy...
 */

// var a = 1;
// function test() {
//     a = a + 4;
//     return a;
// }
// test();
// test();
