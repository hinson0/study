
option=$1
case $option in
    -f)
        echo "文件名字是:$2"
        ;;
    -d)
        echo "目录名字是:$2"
        ;;
    *)
        echo "用法是：[-f filename] | [-d dirname]"
        ;;
esac
