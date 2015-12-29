'use strict';

// 子类继承父类

class Fathor {

  constructor() {
    this.foo = 1;
  }

  hello() {
    return 1;
  }
}


class Son extends Fathor {

  constructor() {
    super();
    this.bar = 2;
  }

  world() {
    return 2;
  }
  
  static hehe() {
    
  }
}

console.log(Object.getOwnPropertyNames(Son)); // length, name, prototype, hehe
console.log(Object.getOwnPropertyNames(new Son())); // [foo, bar]
