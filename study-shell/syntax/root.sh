
# 判断当前用户是否为root
root=`id -u`
if [ ${root} -ne 0 ]; then
    echo 'is not root'
fi
