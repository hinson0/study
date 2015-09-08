/**
 * 1
 * undefined
 * 10
 * undefined
 */

function TestClass() {
    //我认为我在定义一个全局变量
    val = 1;
    //正常显示1
    console.log(val);
    //居然是undefined！
    console.log(global.val);
    
    //我仅仅是添加了以下代码
    var val = 10;
    //显示了10，这里比较好理解，就是局部变量作用域遮盖了全局作用域
    console.log(val);
    //依然是undefined
    console.log(global.val);
}

//调用TestClass构造函数
test = new TestClass();

//确实是undefined
// console.log(val);
