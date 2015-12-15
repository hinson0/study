'use strict';

let str = 'for more information, see chapter 3.4.5.1';
let reg = /(chapter \d+(\.\d)*)/i;
console.log(str.match(reg));

let str2 = 'ABC12312XCXCVDFS123XCVAWDASDFZXCVDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let reg2 = /[A-E]/gi;
console.log(str2.match(reg2));
