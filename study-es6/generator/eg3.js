function* f() {
  console.log('执行了');
}

// 并不会立即显示 '执行了'
var gen = f();

// 2s中后执行gen.next() 才显示执行了
setTimeout(function () {
  gen.next(); 
}, 2000);
