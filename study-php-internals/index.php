<?php

$a = ea_getlong(123);
var_dump($a);

ea_say_hello("yzb");
echo '<br />';
ea_print_two_params('yangzhibing', 'name');
echo '<br />';

// 测试默认参数
ea_func_default('yzb ', 'Mrs');
