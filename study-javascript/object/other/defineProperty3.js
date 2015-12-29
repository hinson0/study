'use strict';

let obj = {
  hello: function* (foo, bar) {
    
  }
};

Object.defineProperty(obj, 'hello', {
  value: function* (foo, bar) {
    yield foo; 
    yield bar; 
    return 1;
  },
  writable: true,
  enumerable: true,
  configurable: true
});

let it = obj.hello(1, 2);
console.log(it.next());
console.log(it.next());
console.log(it.next());
