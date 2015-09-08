
process.on('message', function(message, server) {
    if (message === 'server') {
        server.on('connection', function(socket) {
            socket.end('handled by child, pid is ' + process.pid + '\n'); 
        }); 
    }
});


