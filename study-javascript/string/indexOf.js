'use strict';

// 从前面开始寻找，找不到返回-1
console.log('123'.indexOf(1)); // 0
console.log('123'.indexOf(4)); // -1

// lastIndexOf() 从后面开始寻找，找不到返回-1
console.log('1231'.lastIndexOf(1)); // 3
console.log('1231'.lastIndexOf(4)); // -1
