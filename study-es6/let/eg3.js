'use strict';

(function () {
  var tmp = 1;
  console.log(tmp);
}());

/**
 * 可以使用如下的语法了，以后这类IIFE写法可以丢弃掉 IIFE: Immediately Invoked Function Expression 立即执行函数
 */

{
  let tmp = 1;
  console.log(tmp);
}
