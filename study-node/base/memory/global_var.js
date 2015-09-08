// 手动释放

global.foo = 'i am global object';
console.log(global.foo);
// delete global.foo;
// console.log(global.foo);

// or
global.foo = undefined;
console.log(global.foo);
