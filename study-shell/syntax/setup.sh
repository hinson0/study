#!/bin/bash

php_version='5.5.3'
php_targz_file="php-${php_version}.tar.gz"

function setup() {
    # 解压
    tar -zxf ${php_targz_file}

    # 打开
    dir="php-${php_version}"
    cd ${dir}

    ls -l

    # 配置
    #    ./configure --prefix=/usr/local/php55 --with-config-file-path=/usr/local/php55/etc --enable-fpm --with-fpm-user=www --with-fpm-group=www --with-mysql=mysqlnd --with-mysqli=mysqlnd --with-pdo-mysql=mysqlnd --with-iconv-dir --with-freetype-dir --with-jpeg- dir --with-png-dir --with-zlib --with-libxml-dir=/usr --enable-xml --disable-rpath --enable-magic-quotes --enable-safe-mode --enable-bcmath --enable-shmop --enable-sysvsem --enable-inline-optimization --with-curl
#    --enable-mbregex  --enable-mbstring --with-    mcrypt --enable-ftp --with-gd --enable-gd-native-ttf --with-openssl --with-mhash --enable-pcntl --enable-sockets --with-xmlrpc --enable-zip --enable-soap --without-pear --with-gettext --disable-fileinfo

    # make && make install
}
setup

