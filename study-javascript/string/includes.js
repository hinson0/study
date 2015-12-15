'use strict';

// ES6新加入的API。和indexOf()有相同的作用，但直接返回true/false，而不是返回-1。语义更清晰了；且大小写敏感

let str = 'To be, or not to be, that is the question';
console.log(str.includes('To be')); // true
console.log(str.includes('To be', 1)); // false
console.log(str.includes('TO BE', 1)); // false

