#!/bin/bash

function Hello() {
    echo "第一个参数: $1"
    echo "第二个参数: $2"
    echo "第十个参数: $10"
    echo "第十个参数: ${10}"
    echo "第十一个参数: ${11}"
    echo "参数个数为: $#"
    echo "参数分别为: $*"
}


