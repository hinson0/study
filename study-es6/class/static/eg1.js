'use strict';

class Foo {
  static say() {
    return 'hello';
  }
}

var say = Foo.say();
console.log(say);

var foo1 = new Foo();
foo1.say(); // foo1.say is not a function 
