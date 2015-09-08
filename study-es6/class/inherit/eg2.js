'use strict';

class Point { /* ... */ }

class ColorPoint extends Point {
  constructor() {
  }
}

let cp = new ColorPoint(); // ReferenceError

/**
 * 子类必须在constructor中调用super方法，否则新建示例会报错。
 * 这是因为子类没有自己的this对象，而是继承父类的this然后对其加工。如果不调用super则子类就得不到this对象
 *
 * 参考eg3.js
 *
 */
