

# 字符串运算符
a='hello'
b='world'

if [ ${a} == ${b} ]; then
    echo 'a=b'
fi


if [ ${a} != ${b} ]; then 
    echo 'a!=b'
fi

if [ -z ${a} ]; then
    echo 'a length is zero'
else
    echo 'a length is not zero'
fi

# -n 判断长度不为空
if [ -n ${a} ]; then
    echo 'a length is not zero'
else
    echo 'a length is zero'
fi

# 判断字符串是否为空
if [ $a ]; then
    echo 'a is empty'
else
    echo 'a is not empty'
fi
