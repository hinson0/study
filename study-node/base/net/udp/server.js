var dgram = require('dgram');

var server = dgram.createSocket('udp4');
server.on('message', function(msg, rinfo) {
    console.log(rinfo);
    console.log('---');
    var msg = 'receive message ' + msg + ' from ' + rinfo.address + ':' + rinfo.port;
    console.log(msg);
});
server.on('listening', function() {
    var address = server.address();
    console.log('address ' + address.address + ',port ' + address.port);
});
server.bind(43124);
