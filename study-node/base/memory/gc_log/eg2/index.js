//显示内存使用情况
var showMem = function(){
    var mem = process.memoryUsage();
    var format = function(bytes){
        return (bytes / 1024 / 1024).toFixed(2) + ' MB';
    };
    console.log('process: heapTotal '+format(mem.heapTotal) + 
        ' heapUsed '+format(mem.heapUsed) + ' rss ' + format(mem.rss));
    console.log("-------------------------------------------------------");
}

//申请内存
var useMem = function(){
    var size = 20*1024*1024;
    var arr = new Array(size);
    for( var i=0; i<size; i++){
        arr[i] = 0;
    }
    return arr;
}

var total = [];

for( var j = 0; j<50; j++){
    showMem();
    total.push(useMem());
		total[j] = undefined;
}

//清理内存
for( var i=0; i<total.length; i++){
    total[i] = undefined;
}
total = undefined;
console.log("清理内存完毕");
setInterval(showMem, 5000);

// setInterval(function () {
// 	useMem();
// 	showMem();
// }, 5000);
