
str='hello world'
echo $str
str1="hello world ... $str"
echo $str1

echo -n "字符串\$str1的长度为:"
echo ${#str1}

# 字符串截取
echo ${str1:0:4}

# 字符串查找
echo `expr index "${str}" o`
