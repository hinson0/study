var name = "The Window";
　　var object = {
	　　　　name : "My Object",
	　　　　getNameFunc : function(){
		　　　　　　return function(){
			　　　　　　　　return this.name;
			　　　　　　};
		　　　　}
	　　};
　　console.log(object.getNameFunc()());

/**
 * 这段代码请在chrome下执行，输出的结果为:the window
 *
 * 或者在node的命令行下执行
 */
