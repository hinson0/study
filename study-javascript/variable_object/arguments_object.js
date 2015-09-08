/**
 * this code is used to introduce Arguments Object in function
 *
 * Arguments Object is a prototype of VO
 *
 */

function foo(x, y, z) {
  console.log(arguments);

  console.log(foo.length); // 3
  console.log(arguments.length); // 2

  console.log(foo === arguments.callee); // true, callee is foo

  console.log(x === arguments[0]); // true, variable is shared

  arguments[0] = 1; // arguments[0] is changed to 1
  console.log(x); // x is changed, because arguments[0] and variable x is shared

  x = 100; // x is changed to 100
  console.log(arguments[0]); // arguments[0] now is 100

  // but foo(10, 20) doesn't contain variable z, so variable z and arguments[2] is not shared
  z = 40;
  console.log(arguments[2]); // undefined

  arguments[2] = 50; // arguments[2] is changed to 50, variable z is still 40
  console.log(z); // 40
}

foo(10, 20);
