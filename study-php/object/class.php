<?php

class Hello {
    public $a = 1;
}

$a = new Hello();

$b = $a; // 我们经常说对象的赋值是引用传递，实际上是错误的。

var_dump($b);
var_dump($a);

$b = 1; // 修改b的值后
var_dump($a); // 没有改变，还是对象
var_dump($b); // 改变了，已经不是对象了而是1，因此可以判断，对象的赋值并不是引用传递

// 对象的赋值实际上就是 传值赋值，而不是引用赋值。
// 但对象的赋值 实际上赋值的是对象身份ID（object identifier）