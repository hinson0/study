
val=`expr 2 + 2`
echo ${val}

a=10
b=120
val=`expr $a + $b`
echo ${val}

# 在vim中执行shell命令
# 在命令行模式下输入: :! ls -l
# 如果想将命令的内容作为当前文本的内容则: :r !ls -l

val=`expr ${a} - ${b}`
echo ${val}

val=`expr ${a} \* ${b}`
echo ${val}

val=`expr ${a} / ${b}`
echo ${val}

val=`expr ${a} % ${b}`
echo ${val}

if [ ${a} -eq ${b} ]; then
    echo 'a=b'
fi

if [ ${a} -ne ${b} ]; then
    echo 'a!=b'
fi


