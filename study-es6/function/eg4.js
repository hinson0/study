function foo(x = 5, y = 6) {
  console.log(x, y);
}

foo(undefined, null); // 5, null
 
/**
 * undefined会触发默认值，
 * null则不会
 *
 * 这个和es5理解相同，当为undefined时，则理解不定义，采用默认值。而null本身可以理解为一个'为空'的值
 *
 *
 * 这个null和PHP的null不一样，PHP的null的意思就是未定义。类似
 *  $a = null;
 *  isset($a); // false
 *  isset($b); // false
 *
 *  上面2个isset都是false
 * 
 */
