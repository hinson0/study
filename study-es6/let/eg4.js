'use strict';

function f() {
  console.log('i am outside!');
}

(function () {
  if (false) {
    function f() {
      console.log('i am inside!');
    }
  }
  f();
}());

// 用es5的知识点来理解上面的代码
// 当进入第5行代码后，进入函数内部，该函数的变量对象VO={f: function} 因此此时输出i am inside


// 在es6下运行，上面的代码可以看成
// function f() {
//   console.log('i am outside!');
// }                              
// 
// {
//   if (false) { // if内的块级作用域
//     function f() {
//       console.log('i am inside!');
//     }
//   }
// 
//   f(); // 因此执行最外面的f()
// }
