var a = {name: "yzb"};
var b = a;

console.log(a); // { name: 'yzb' }
console.log(b); // { name: 'yzb' }

a.name = 'yzb2';
console.log(a); // { name: 'yzb2' }
console.log(b); // { name: 'yzb2' }

a = {xxx: "123123"};
console.log(a); // { xxx: '123123' }
console.log(b); // { name: 'yzb2' }

/**
 *
 * a是一个对象，因此b=a后，b是a的一个引用（即指向同一个内存地址）
 *  因此4,5行输出的结果相同
 *
 * 当修改a的属性name，此时内存地址的相关内容发生改变
 *  因此8,9行输出的结果都反应name变化；输出结果都为name:yzb2
 *
 * 当a={xxx}重新赋值后，此时a被重新指向新的内存地址（b与a的关系断裂），因此b依然为原内存地址，a为新的内存地址
 *  因此12,13行代码输出的结果b不变，a为新的内容
 *
 *
 *  ----------------------------------------
 *
 *  同理：
 *
 *  node内核中module.js的部分代码如下:
 *
 *  Module.prototype._compile = function(content, filenmae) {
 *    // some codes
 *
 *    var args = [self.exports, require, self, filename, dirname];
 *    return compiledWrapper.apply(self.exports, args);
 *  }
 *
 *  这段代码也就是网上流行的一句这样的话：Node模块加载机制，会对js文件进行一层封装，以避免污染整个全局环境，类似如下的效果
 *
 *  (function (exports, require, module, __filename, __dirname) {
 *    // js codes
 *  });
 *
 *  ----------------------------------------
 *
 *  exports其实是module.exports的一个引用，因此exports与module.exports的区别总结如下：
 *
 *    * exports是module.exports的一个引用
 *    * exports被重新赋值后，module.exports与exports关系断裂，module.exports依然为默认值（默认值为:{})
 *    * module.exports被重新赋值后，module.exports与exports关系断裂，exports依然为默认值（默认值为:{}) 因此在express框架中经常看到module.exports = exports = xxxx，就是为了保持这2者的关联
 *    * exports.xxx = function(){}，这类的做法是可以的，相当于对exports增加属性。
 *
 */
