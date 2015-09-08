var net = require('net');
var client = net.connect({port: 8888}, function() {
    console.log('client connected');
    client.write('hi');
    client.write('hello');
    client.write('world');
});

client.on('data', function(data) {
    console.log(data.toString());
    // client.end();
});
client.on('drain', function() {
    console.log('drain');
});

client.on('end', function() {
    console.log('client disconnected');
});
