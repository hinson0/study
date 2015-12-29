'use strict';

let a = 'hello';
let b = 'world';


// es5表示
let obj = {
  a: a,
  b: b
};

// es6 
let obj2 = {
  a,
  b
};

console.log(obj);
console.log(obj2);
