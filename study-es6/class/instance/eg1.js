'use strict';

// 定义类
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `${this.x}, ${this.y}`;
  }
}

var p = new Point(1, 2);

console.log(p.toString()); // 1, 2

console.log(p.hasOwnProperty('x')); // true
console.log(p.hasOwnProperty('y')); // true

console.log(p.hasOwnProperty('toString')); // false 因为toString属于类
console.log(p.__proto__.hasOwnProperty('toString')); // true

