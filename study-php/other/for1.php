<?php

$array = array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

$start = microtime(true);
$n = 100000;
$count = count($array);
for ($i = 0; $i < $n; $i++) {
    for ($j = 0; $j < $count; $j++) {
        $k = 1231231 * $j;
    }
}
$end = microtime(true) - $start;
echo $end;