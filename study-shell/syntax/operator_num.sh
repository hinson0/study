
# 关系运算符
a=10
b=20

# -eq 相等
if [ ${a} -eq ${b} ]; then
    echo 'a -eq b'
fi

# -ne 不相等
if [ ${a} -ne ${b} ]; then
    echo 'a -ne b'
fi

# -gt 大于
# -ge 大于等于
if [ ${a} -gt ${b} ]; then
    echo 'a -gt b'
fi

if [ ${a} -ge ${b} ]; then
    echo 'a -ge b'
fi

# -lt 小于
# -le 小于等于
if [ ${a} -lt ${b} ]; then
    echo 'a -lt b'
fi
if [ ${a} -le ${b} ]; then
    echo 'a -le b'
fi
