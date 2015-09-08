// 括号里面永远是表达式

var result = (1);
console.log(result);

var result1 = (2 && 1);
console.log(result1);

var result2 = ('foo');
console.log(result2);

var result3 = (function (x) {
  console.log(x);
});
console.log(result3);
