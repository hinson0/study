var net = require('net');

// var server = net.createServer(function(socket) {
//     // 新的连接
//     socket.on('data', function(data) {
//         console.log(data); 
//     });
// 
//     socket.on('end', function() {
//         console.log('断开连接');
//     });
//     
//     socket.write("欢迎光临 node.js深入浅出");
// });
// 
// server.listen(8888, function() {
//     console.log('server bound');
// });


var server = net.createServer();
server.on('connection', function(socket) {
     // 新的连接
    socket.on('data', function(data) {
        console.log(data.toString()); 
    });

    socket.on('end', function() {
        console.log('断开连接');
        socket.end();
    });
    
    socket.write("欢迎光临 node.js深入浅出");
});
server.listen(8888, function() {
    console.log('tcp port 8888');
});
