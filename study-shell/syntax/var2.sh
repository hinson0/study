
echo ${var:-'我不存在'}
echo ${var}

echo ${var:='我不存在，但被赋值了'}
echo ${var}

# 因为上面对var进行了赋值，所以此时var存在
echo ${var:+'定义了，则返回我'}
echo ${var}

unset var
echo ${var:?'不存在，将错误信息打印'}
