<?php

$config = [
    'limit' => 3, // 跨越多少个版本生成增量包
    'python_bin' => '/usr/bin/python', // 定义python命令行
    'make_delta' => APP_PATH . '../cron/make_delta.py', // make_delta.py路径
];

return $config;