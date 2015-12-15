'use strict';

console.log('John Smith'.replace(/(\w+)\s(\w+)/i, '$2 $1')); // Smith John


// https://test.mall.com/act/14700/aaaaa
// reg: /^(.+)$/i
// http://127.0.0.1:3000/$1

let url = 'act/14700/aaaaa'; 
let reg = /^(.+)$/i;
let matches = url.replace(reg, 'http://127.0.0.1:3000/$1'); // 整个匹配
console.log(matches);

let proxy_pass = [ //代理转发规则
  {   
    server_name: 'localhost test.tmall.com test.daily.tmall.net',
      rewrite: [
      {   
        rule: /^(.+)$/,
        target: 'http://127.0.0.1:3000/$1' //转发到wormhole服务所在的3000端口
      }   
    ]   
  },  
  {   
    server_name: 'g.tbcdn.cn g.assets.daily.taobao.net g.alicdn.com',
    rewrite: [
    {   
      rule: /^(.+)$/,
      target: 'http://127.0.0.1:8000/$1'
    }   
    ]   
  }   
];

function getDestUrl(host, uri) {
  // host = test.tmall.com
  // uri = /act/14700/aasdfasdfsadf/sdfsdf
  
  let proxy = proxy_pass.find(isServerNameExisted);
  if (!proxy) {
    return null;
  }
  let rewrite = proxy.rewrite.find(isRuleMatched);
  if (!rewrite) {
    return null;
  } 
  let newUri = uri.substr(1); // /act/14700/section-dingtian -> act/14700/section-dingtian
  let destUrl = newUri.replace(rewrite.rule, rewrite.target);

  return destUrl;

  function isServerNameExisted(proxy) {
    return proxy.server_name.includes(host);
  }
  function isRuleMatched(rewrite) {
    return rewrite.rule.test(uri);
  }
}

console.log(getDestUrl('test.tmall.com', '/act/14700/sdfa/section-dingtian'));

