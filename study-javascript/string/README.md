## String 字符串

* 字符串字面量与String Object的区别
    * typeof返回的结果不相同;
    
        ```
        typeof 'abc'; // string
        typeof new String('abc'); // object 
        
        ```
    * String Object可以无缝转换为字符串字面量
        
        ```
        
        let str = new String('abc'); // object
        str.toString(); // string 'abc'
        str.valueOf(); // string 'abc'
        // valueOf === toString() 等同
        
        ```
        

* 字符串模板

```
let world = 'world';
cosnole.log(`hello ${world}`); // hello world

```

* 字符访问

    * 可以使用charAt()
    * 可以使用数组中括号来访问
    
    ```
    'cat'.charAt(1); // a
    'cat'[1]; // a 效果等同上面
    
    ```
    
    * 但是用数组访问有一个特点：我们是无法通过'cat'[1] = 'x'来赋值的。这样是语法错误。因为字符串的字符的descriptor的writable为false
    
    ```
    
    Object.getOwnPropertyDescriptor('cat', 1); // {value: a, writable: false, enumerable: true, configurable: false}
    
    
    ```
    
* es6的一些新方法
    * String.prototype.includes()
    * String.prototype.trimLeft()/trimRight()
    * String.prototype.startsWith()/endsWith()
    
