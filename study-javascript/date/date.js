'use strict';

let date = new Date(); // 写这个代码的时间为:2015-12-22 20:57，秒数不关注

let year = date.getFullYear(); // 2015
let month = date.getMonth(); // 11
let day = date.getDate(); // 22
let hour = date.getHours(); // 20
let minute = date.getMinutes(); // 57
let second = date.getSeconds(); 
let unixtime = date.getTime(); // 时间戳

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minute);
console.log(second);
console.log(unixtime);


