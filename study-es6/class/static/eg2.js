'use strict';

class Foo {
  static say() {
    return 'hello';
  }
}

class Bar extends Foo {
  static say() {
    return super.say() + ' world';
  }  
}

var result = Bar.say();
console.log(result);



