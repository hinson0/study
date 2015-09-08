/**
 * a variable can not be deleted with the delete operator
 */

global.a = 10;

console.log(a);

console.log(delete a); // true

console.log(global.a); // undefined

// console.log(a); // if we still use a variable, an error occurred

var b = 20;

console.log(delete b); // false

console.log(b); // still 20
