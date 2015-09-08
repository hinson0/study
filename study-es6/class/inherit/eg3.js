'use strict';

class Point {
  toString() {
    return 'Point';
  }
  say() {
    return 'say';
  }
}

class ColorPoint extends Point {

  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
    return `${this.color} ${super.say()} ${super.toString()} `;
  }

}

let cp = new ColorPoint(1, 2, 'red');
console.log(cp.toString());

/**
 * by the way
 *
 * 子类如果没有定义constructor方法，这个方法也会被默认添加；
 *
 * constructor(...args) {
 *  super(..args)
 * }
 *
 */
