# node-shell.sh

> 该shell脚本是用来检查node的版本，并且使用cnpm来启动你想要的node程序，包含的功能：

 - 首先你需要配置如下，包含默认最低版本，node_bin路径，以及npm_bin路径
 
```
# 版本
readonly NODE_VERSION='v0.12'

# 启动相关
node_bin=''
npm_bin=''
```

 - check_version 检查node版本
 - 创建cnpm
 - 初始化package.json依赖的目录
 - 静默启动你的脚本，并且日志名字为start.log