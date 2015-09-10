function fetch(url, {method = 'GET'} = {}) {
  console.log(method);
}

fetch('baidu.com');

/**
 * 双重的默认值，这个有点颠覆了我的大脑了，真是算见识了。
 */
