'use strict';

let obj = {
  hello: function (foo, bar) {
    
  }
};

Object.defineProperty(obj, 'hello', {
  value: function (foo, bar) {
    console.log(foo); 
    console.log(bar); 
    console.log(11); 
  },
  writable: true,
  enumerable: true,
  configurable: true
});

obj.hello(222, 333);
