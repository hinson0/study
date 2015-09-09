#!/bin/bash

# 版本
readonly NODE_VERSION='v0.12'

# 启动相关
dir=`pwd`
node_bin=''
npm_bin=''

# 检查node-bin
function check_node_bin() {
    if [ ${node_bin} == '' ]; then
        echo '请填写node_bin，必须为绝对路径'
        exit 1
    fi

    if [ ${npm_bin} == '' ]; then
        echo '请填写npm_bin，必须为绝对路径'
        exit 2
    fi

    # 随便执行下，确认没有错误
    test1=`${node_bin} -v`

    # 执行出错
    if [ $? -ne 0 ]; then
        echo 'node_bin检测错误，请确认node_bin的绝对路径是否正确'
        exit 3
    fi

    # 随便执行下，确认没有错误
    test2=`${npm_bin} -v`

    # 出错
    if [ $? -ne 0 ]; then
        echo 'npm_bin执行出错，请确认npm_bin的绝对是否正确'
    fi
}
check_node_bin

# 检查版本
function check_version() {
    # 默认版本
    defualt_version_first=${NODE_VERSION:1:1}
    deault_version_second=${NODE_VERSION:3:2}

    node_version=`${node_bin} -v`
    node_version_first=${node_version:1:1} # v0.12.4 提取 0
    node_version_second=${node_version:3:2} # v0.12.4 提取 12

    if [ ${node_version_first} -lt ${defualt_version_first} ]; then
        echo "运行的Node版本需要${NODE_VERSION}+"
        exit 1
    fi

    if [ ${node_version_second} -lt ${deault_version_second} ]; then
        echo "运行的Node版本需要${NODE_VERSION}+"
        exit 2
    fi
}
check_version

# 新建cnpm
cnpm_bin="${npm_bin} --registry=https://registry.npm.taobao.org --cache=$HOME/.npm/.cache/cnpm --disturl=https://npm.taobao.org/dist --userconfig=$HOME/.cnpmrc"

# 首先npm初始化
${cnpm_bin} install

# 静默启动
${node_bin} ${dir}/server.js > ${dir}/start.log &

echo 'start successfully'
