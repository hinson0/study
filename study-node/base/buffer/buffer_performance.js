var http = require('http');

var hello = '';
for (var i = 0; i < 8 * 1024; i++) {
    hello += 'a';
}

hello = new Buffer(hello);

http.createServer(function(req, res) {
    res.writeHead(200);
    res.end(hello);
}).listen(8081);

