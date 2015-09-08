function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var iterator = foo(5);
// iterator.next(); // 6
// iterator.next(); // NAN
// iterator.next(); // NAN

iterator.next(); // 6
iterator.next(12); // 上一次yield的值为12，那么y=2*12=24，因此这里输出 {value: 8, done: false}
iterator.next(13); // 上一次的yield返回的值为13，那么z=13，因此return (x+y+z) = return (5+24+13) = return 42，因此输出{value：42,value:true}



