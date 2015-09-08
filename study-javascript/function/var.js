console.log(a);
var a = 1;
console.log(a);

/**
 * 解释：
 *  在运行期，第1行，查找变量字符表，发现存在(第2行申明)，但在第1行输出的时候，值为undefined
 *  第3行输出的时候，正常
 *  上述代码理解为
 */

// var a;
// console.log(a);
// a = 1;
// console.log(a);
