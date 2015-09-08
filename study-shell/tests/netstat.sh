#!/bin/bash

`netstat -tnpl | grep -q ngi1nx`
if [ ${?} -eq 0 ]; then
    echo 'nginx starting'
else
    echo 'nginx stop'
fi
