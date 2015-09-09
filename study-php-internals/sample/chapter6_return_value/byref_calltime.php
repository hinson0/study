<?php

function byref_compiletime(&$b) {
    $b = 'modified by comiletime';
}
$bar = 'yzb';
byref_compiletime($bar);
echo $bar;
