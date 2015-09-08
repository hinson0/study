<?php

$array = [1, 2, 3, 4];
foreach ($array as $key => &$value) {
    $value += 3;
}
//unset($value);

var_dump($array);
echo '<br />';
$value = 10;
var_dump($array);
