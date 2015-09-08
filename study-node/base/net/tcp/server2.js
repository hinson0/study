var net = require('net');

var server = net.createServer();

server.on('connection', function(socket) {
    socket.on('data', function(data) {
        console.log('client say:');
        console.log(data.toString());
    });

    socket.on('end', function() {
        console.log('see u later');
    });

    console.log('client say: hello');
});

server.listen(9912, function() {
    console.log('server listen 9912');
});


// server.listen('/tmp/echo.sock');
