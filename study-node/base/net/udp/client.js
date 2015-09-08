var dgram = require('dgram');
var client = dgram.createSocket('udp4');
var message = new Buffer('深入浅出node.js');
client.send(message, 0, message.length, 43124, '192.168.94.26', function(err, bytes) {
    console.log(err);
    console.log(bytes);
    client.close();
});
