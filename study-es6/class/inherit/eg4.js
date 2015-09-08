'use strict';

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    this.color = color; // 错误
    super(x, y);
    // this.color = color; // 正确
  }
}

let cp = new ColorPoint(1, 2, 'green');

console.log(cp instanceof ColorPoint); // true
console.log(cp instanceof Point); // true

/**
 * 子类的constructor没有调用super之前，就是用this，会报错
 *
 */

