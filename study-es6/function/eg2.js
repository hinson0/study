'use strict';

function fetch(url, {body = '...', method = 'GET', headers = {'Content-Type': 'plain/text'}}) {
  console.log(method);
  console.log(body);
  console.log(headers);
}

fetch('baidu.com', {});

/**
 * 可以为对象的各个属性设置默认值
 */
