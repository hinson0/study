#!/bin/bash

function Hello() {
    echo "该函数进行两数相加..."
    echo -n "请输入第一个数:"
    read aNum
    echo -n "请输入第二个数:"
    read bNum
    echo "您输入的2个数字为: $aNum and $bNum"
    return $(($aNum + $bNum))
}
Hello
sum=$?
echo "2个数字相加的结果为:$sum"
