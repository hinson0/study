#!/bin/bash
readonly ERROR_CODE_NOT_ROOT=1 # 不是root用户

# 判断是否是root用户
#root_id=`id -u`
#if [ ${root_id} -ne 0 ]; then
#    echo "运行此shell脚本必须是root用户。请切换到root在执行该脚本。"
#    exit ${ERROR_CODE_NOT_ROOT}
#fi

# 错误码
readonly ERROR_CODE_PHP_VERSION_INVALID=2 # 非法的PHP版本
readonly ERROR_CODE_PHP_DOWNLOAD_FAILED=3 # 下载失败
readonly ERROR_CODE_PHP_TARG_FILE_NOT_EXISTS=4 # PHP源文件不存在

# 保存当前路径。
cur_dir=`pwd`

# 提示需要安装的版本，支持5.5的。老版本不支持
echo -n '请输入您要安装的PHP版本，目前只支持5.5的安装:'
read php_version

function is_version_valid() {
    # 检查是否为空
    if [ "${php_version}" == "" ]; then
        echo "请输入php版本号"
        exit ${ERROR_CODE_PHP_VERSION_INVALID}
    fi
    # 检查版本号是否合法
    version_str=${php_version//./ }
    versions=(${version_str})
    if [ ${versions[0]} -lt 5 ] || [ ${versions[1]} -lt 5 ]; then
        echo "目前支持5.5以上的版本"
        exit ${ERROR_CODE_PHP_VERSION_INVALID}
    fi
}

# 判断是否大于5.5
is_version_valid


# 让用户进一步确认
echo "您要安装的php版本为:${php_version}"
echo "继续请按任意键，取消安装请按ctrl+c..."

function anykey() {
    SAVEDSTTY=`stty -g`
    stty -echo
    stty cbreak
    dd if=/dev/tty bs=1 count=1 2> /dev/null
    stty -raw
    stty echo
    stty $SAVEDSTTY
}
ankey=`anykey`

# 定义php_targz_file名
readonly PHP_TARGZ_FILE="php-${php_version}.tar.gz"

# 下载对应的版本
function download_php() {
    echo "开始下载php-${php_version}..."
    wget -c http://www.php.net/distributions/${PHP_TARGZ_FILE}
    if [ $? -eq 0 ]; then
        echo "下载成功..."
        return 0
    fi
    wget -c  http://museum.php.net/php5/${PHP_TARGZ_FILE}
    if [ $? -eq 0 ]; then
        echo "下载成功..."
        return 0
    fi
    echo "下载失败，请查看下您输入的版本确定存在否"
    return ${ERROR_CODE_PHP_DOWNLOAD_FAILED}
}
download_php

# 检查下载的文件是否存在
function check_php_targz_exists() {
    echo "检查${PHP_TARGZ_FILE}是否存在..."
    if [ -s ${PHP_TARGZ_FILE} ]; then
        echo "文件存在...安装继续..."
        return 0
    else
        echo "文件不存在"
        return ${ERROR_CODE_PHP_TARG_FILE_NOT_EXISTS}
    fi
}
check_php_targz_exists

# 判断文件结果
if [ $? -ne 0 ]; then
    download_php
    if [ $? -ne 0 ]; then
        echo "下载失败...安装停止..."
        exit ${ERROR_CODE_PHP_DOWNLOAD_FAILED}
    fi
fi

# 安装
function setup() {
    # 解压
    tar -zxf ${PHP_TARGZ_FILE}

    # 打开
    cd "php-${php_version}"

    # 配置
    ./configure --prefix=/usr/local/php55 --with-config-file-path=/usr/local/php55/etc --enable-fpm --with-fpm-user=www --with-fpm-group=www --with-mysqli=mysqlnd --with-pdo-mysql=mysqlnd --with-iconv-dir --with-freetype-dir --with-jpeg-dir --with-png-dir --with-zlib --with-libxml-dir=/usr --enable-xml --disable-rpath --enable-magic-quotes --enable-safe-mode --enable-bcmath --enable-shmop --enable-sysvsem --enable-inline-optimization --with-curl --enable-mbregex  --enable-mbstring --with-mcrypt --enable-ftp --with-gd --enable-gd-native-ttf --with-openssl --with-mhash --enable-pcntl --enable-sockets --with-xmlrpc --enable-zip --enable-soap --without-pear --with-gettext --disable-fileinfo

    # make && make install
}
setup

# 检查安装


