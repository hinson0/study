function foo(a, ...values) {
  
}

console.log(foo.length); // 1 函数的length值会失真，默认参数以及rest参数都不算入length
