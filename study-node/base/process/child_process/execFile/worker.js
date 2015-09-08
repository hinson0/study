#!/usr/bin/env node

var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end();
});

var port = Math.round((Math.random() + 1) * 1000);
server.listen(port);
