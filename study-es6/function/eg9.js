'use strict';

function f(x, y, z) {
  return x + y + z;
}

console.log(f(...[1, 2, 3]));

/**
 * 演示 拓展运算符(spread)。它是rest参数的逆运算
 */

// another example
{
  let max = Math.max(...[2, 3, 4]);
  console.log(max);
}

// another example
{
  let arr1 = [0, 1, 2];
  let arr2 = [4, 5, 6];

  arr1.push(...arr2);
  console.log(arr1);
}
