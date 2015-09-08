var fs = require('fs');
var files = [
  'a.txt',
  'b.txt',
  'c.txt'
];

// for (var i = 0; i < files.length; i++) {
//     fs.readFile(files[i], 'utf-8', function(err, contents) {
//        console.log(files[i] + ':' + contents); 
//     });
// }

// 解决方案1,使用闭包
// 使用闭包的目的在于,每一次循环都是不同的闭包实例,因此i的值并没有被释放
// for (var i = 0; i < files.length; i++) {
//     (function(i) {
//         fs.readFile(files[i], 'utf-8', function(err, contents) {
//             console.log(files[i] + ':' + contents);
//         });
//     })(i);
// }

// 更好的解决方案
files.forEach(function (filename) {
  fs.readFile(files[i], 'utf-8', function (err, contents) {
    console.log(files[i] + ':' + contents);
  });
});
