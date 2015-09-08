<?php

function xrange($start, $limit, $step = 1) {
    for ($i = $start; $i <= $limit; $i += $step) {
        yield $i;
    }
}

//foreach (xrange(1, 10) as $key => $value) {
//    var_dump($key);
//    var_dump($value);
//}

//$a = xrange(1, 10);
//
//echo $a->current();
//$a->next();
//echo $a->current();
