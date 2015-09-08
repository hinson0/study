
echo -n "请输入1-4数字:"
read num
case $num in
    1)
        echo "您输入了：1"
        ;;
    2)
        echo "您输入了：2"
        ;;
    3)
        echo "您输入了：3"
        ;;
    4)
        echo "您输入了：4"
        ;;
    *)
        echo "您应该选择1-4之间的数字"
        ;;
esac

