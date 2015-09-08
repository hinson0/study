var tmp = new Date();

function f(){
  console.log(tmp); // undefined
  if (false){
    var tmp = "hello world";
  }
}

f();

// 常见的，es5中，通过var tmp后，进入函数f，那么函数的VO={tmp: undefined}，因此输出undefined
