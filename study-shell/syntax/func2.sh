#!/bin/bash

function Hello1() {
    echo "hello world1"
    Hello2
}

function Hello2() {
    echo "hello world2"
}

Hello1


#unset f Hello1

Hello1
