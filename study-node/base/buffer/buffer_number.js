var buf = new Buffer(100);
console.log(buf.length);

// console.log(buf[10]);
// console.log(buf[11]);
// console.log(buf[12]);

buf[10] = 100; // 100
buf[11] = -100; // 156
buf[12] = 300; // 44
buf[13] = 3.14; // 44

console.log(buf[10]);
console.log(buf[11]);
console.log(buf[12]);
console.log(buf[13]);
