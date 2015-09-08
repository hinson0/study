<?php

const X = 2;
const Y = X + 3;

class Foo {
    const A = 1;
    const B = self::A + 1;
    const C = self::B / 2;
    
    const D = 'Hello world ' . self::C;
    
    public function fxx($a = Y + self::A) {
        echo $a;
    }
}

echo Foo::A;
echo Foo::B;
echo Foo::C;
echo Foo::D;

echo (new Foo())->fxx();