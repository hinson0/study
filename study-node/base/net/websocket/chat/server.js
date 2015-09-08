var WebSocketServer = require('ws').Server;

var wss = new WebSocketServer({port: 8082});
wss.on('connection', function (websocket) {
  websocket.on('message', function (message) {
    wss.clients.forEach(function(client) {
      client.send(message);
    });
  });

});

wss.on('error', function(error) {
  console.log('error');
  console.log(error);
});

console.log('websocket server is running on port 8082');


