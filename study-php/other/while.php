<?php

$number = 100000;
$array = array_fill(0, $number, 'banana');

$start = microtime(true);

$i = 0;
while ($i < $number) {
    $x = $array[$i];
    $i++;
}

$end = microtime(true);
echo $end - $start;

echo '<hr />';

$number = 100000;
$array = array_fill(0, $number, 'banana');

$start = microtime(true);
foreach ($array as $value) {
    $x = $value;
}
$end = microtime(true);
echo $end - $start;
