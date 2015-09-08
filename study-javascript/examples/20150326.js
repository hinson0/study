
//函数一
var a = 'a1';
function f1() {
    console.log(a); // undefined
    var a = a || 'a2';
    console.log(a); // a2
}
f1();


// 函数二
var b = 'b1';
function f2(){
    console.log(b); // b1
    b = b || 'b2';
    console.log(b); //  b1
}
f2();

/**
 * 解释函数1：
 *  关键字function是编译期执行的，在编译期时，f1函数查找自身的变量字符串，发现下面已经申请a(第6行：var a)，因此在第5行a=undefined，因此第7行a=a2,
 *
 * 解释函数2：
 * 编译期执行f2时，第15行代码，查找f2函数的变量字符表，发现没有，因此往上走，到全部发现b1存在(第13行：var b)，因此第15行b=b1，第17行b=b1
 */

