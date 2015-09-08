var x = 10;

function foo() {
  console.log(x);
}

(function (funArg) {
  var x = 20;
  funArg();
})(foo);
