var iconv = require('iconv-lite');
var buf = iconv.encode('深入浅出Node.js', 'GBK');
console.log(buf);
var str = iconv.decode(buf, 'GBK');
console.log(str);
