'use strict';

// let p = Promise.reject(new Error('boom'));

// p.then(function (value) {
//     console.log('resolved');
//     console.log(value);
//   }, function (err) {
//     console.log('rejected');
//     console.log(err);
//   })
//   .catch(function (err) {
//     console.log('catch');
//     console.error(err.message);
//   });

// 上述代码等价下面的 
let p = Promise.reject(new Error('boom'));
p.then(function (value) {
    console.log('resolved');
    console.log(value);
  })
  .catch(function (err) {
    console.log('catch');
    console.error(err.stack);
  });

// Promise.prototype.catch 是 .then(null, rejetion)的别名，用于指定获取错误的回调函数
