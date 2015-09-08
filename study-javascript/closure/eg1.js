var a = 1;

function c() {
  var a = 2;
  return function () {
    console.log(a);
  }
}

c()(); // 2


/**
 * 闭包是代码块与创建该代码块的上下文数据的结合
 */
