'use strict';

function f1() {
  let n = 5;
  let n = 10; // SyntaxError: Identifier 'n' has already been declared
}

/**
 * 使用let定义变量后，不可以重新定义，否则语法报错
 *
 */
