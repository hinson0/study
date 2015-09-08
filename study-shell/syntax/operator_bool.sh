
# 布尔运算符
a=10
b=20

# -o 或者
if [ ${a} -gt 5 -o ${b} -gt 30 ]; then 
    echo 'a -gt 5 -o b -gt 30: is true'
fi

# -a 并且
if [ ${a} -gt 5 -a ${b} -gt 30 ]; then
    echo 'a -gt 5 -a b -gt 30: is true'
else
    echo 'is false'
fi
