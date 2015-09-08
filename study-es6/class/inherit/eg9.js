'use strict';

class A {
  
}

class B extends A {
  say() {
     
  }
}

console.log(Object.getPrototypeOf(B) === A);
