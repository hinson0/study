function* f() {
  for (var i = 0; true; i++) {
    var reset = yield i;
    console.log(reset);
    if (reset) {
      i = -1;
    }
  }
}

var g = f();

g.next(); // { value: 0, done: false }
g.next(); // { value: 1, done: false }
g.next(); // { value: 2, done: false }
g.next(true); // { value: 0, done: false }

/**
 * next()通过传入一个参数，该参数就是上一次的yield的返回值 
 *
 * 上面的代码
 *  在没有传入true参数的时候，reset总是为undefined，因此下面的i = -1操作永远不会执行
 *  当传入true参数后，reset就被赋值为true，因此i=-1赋值成功。因此上一次的i操作后为-1，经过i++，又变回0，因此打印出  { value: 0, done: false }
 */



