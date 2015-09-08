
array=(1 2 3 4 5 6)
echo -n "数组的第一个元素为:" 
echo ${array[0]}
echo -n "数组的第二个元素为:" 
echo ${array[1]}
echo -n "s数组所有的元素为:"
echo ${array[*]}
echo -n "数组的长度为:"
echo ${#array[*]}
echo -n "第一个元素的长度为:"
echo ${#array[0]}

