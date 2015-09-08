
while :
do
    echo -n "请输入1-5的数字:"
    read num
    case $num in
        1|2|3|4|5)
            echo "继续中"
            ;;
        *)
            echo "结束了"
            break
            ;;
    esac
done

