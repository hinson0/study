'use strict';

Object.defineProperty(Object.prototype, 'hello', {
  value: 'world'
});


Object.prototype.xx = 123;
console.log({}.hello); // world
console.log('123'.hello); // world
console.log('123'.xx); // world

