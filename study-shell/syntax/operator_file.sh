
# -r -w -x 读，写，执行权限
file='./func1.sh'
if [ -r ${file} ]; then
    echo "${file} can read"
fi

if [ -w ${file} ]; then
    echo "${file} can write"
fi

if [ -x ${file} ]; then
    echo "${file} can excute"
fi

# -s 判断文件大小
# -e 判断文件是否存在
# -f 判断是否是文件
# -d 判断是否是目录
if [ -s ${file} ]; then
    echo "${file} size is not 0"
fi

if [ -e ${file} ]; then
    echo "${file} exist"
fi

if [ -f ${file} ]; then
    echo "${file} is file"
fi

if [ -d ${file} ]; then
    echo "${file} is dir"
fi



