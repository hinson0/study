<?php

class Foo {
    
    private $prop;

    public function __construct($val) {
        $this->prop = $val;
    }
    
    public function __debugInfo() {
        return [
            'propSquared' => $this->prop ** 2,
        ];
    }
    
}

var_dump(new Foo(42));