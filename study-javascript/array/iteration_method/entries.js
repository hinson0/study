'use strict';

let arr = ['a', 'b', 'c'];
let entries = arr.entries();
console.log(entries);
let first = entries.next();
console.log(first);
console.log(first.value[0]);
console.log(first.value[1]);


entries.next();
entries.next();
let over = entries.next();
console.log(over);
