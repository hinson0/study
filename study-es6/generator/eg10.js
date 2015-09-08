var gen = function* gen(){
  yield console.log('hello');
  yield console.log('world');
}

var g = gen();
g.next();

try {
  // g.throw(); // 这个会中断
  throw new Error('eee'); // 这个不会中断generator
} catch (e) {
  g.next();
}
// hello
