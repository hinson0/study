
myurl='http://xxx.com'
echo ${myurl}
myurl='http://jjj.com'
echo ${myurl}
myhello='http://zzzz.com'
readonly myhello
echo $myhello
#myhello='ddd'

unset myurl
echo $myurl
