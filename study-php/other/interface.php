<?php

interface Hello {
    public static function foo();
}

abstract class Father implements Hello {
    
}

class Son extends Father {
    
}

