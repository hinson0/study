## JSON: * JavaScript Object Notation JS对象标记

* 概念：JSON是一个语法，用来序列化ojbects,arrays,strings,booleans,null。
* 与JS的区别：

    |JS类型| JSON不同点 |
    | - | - |
    | Ojbects AND Arrays | 属性必须用双引号包裹，并且末尾不能有分号 |
    | Numbers | 数字前不能加0；小数点后面必须要加一个数字 |
    | Strings | Only a limited sets of characters may be escaped; certain control characters are prohibited; the Unicode line separator (U+2028) and paragraph separator (U+2029) characters are permitted; strings must be double-quoted. See the following example where JSON.parse() works fine and a SyntaxError is thrown when evaluating the code as JavaScript: |
    
``` 
var code = '"\u2028\u2029"';
JSON.parse(code); // works fine
eval(code); // fails
    
```

* 方法：
    * JSON.pasre() 将JSON边长JS的Object
    * JSON.stringify() 将JS的Object变成JSON


## 参考资料
* [Mozilla JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
