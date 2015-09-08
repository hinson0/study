#!/bin/bash

function Hello() {
    echo "hello world"
    exit 1234567
}

Hello
res=$?
echo $res



