
# 命令替换
date=`date`
echo ${date}

date1=date
echo ${date1}

users=`who | wc -l`
echo ${users}

hello=`date ; uptime`
echo ${hello}

