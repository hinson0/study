# base
基本的javscript语法介绍，这里主要记录javascript基本语法

## 文件说明

* test.js

  是一个大杂烩了。

* 20150326.js

  这是一个非常有意思的例子，是3月26号我在oschina看到的。关于javascript中var申明变量的

```javascript
//函数一
var a = 'a1';
function f1(){
    console.log(a);
    var a = a || 'a2';
    console.log(a);
}
f1(); // ?


// 函数二
var b = 'b1';
function f2(){
    console.log(b);
    b = b || 'b2';
    console.log(b);
}
f2(); // ?
```

* forEach.js

  是关于forEach的使用

* push.js
  
  主要演示一个空对象中，往不存在的元素添加一个元素

```javascript
var hello = {};
// hello.xx = [];
hello.xx.push(1);
console.log(hello); // ?
```
