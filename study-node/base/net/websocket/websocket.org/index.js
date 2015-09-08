var WebSocket = require('ws');
var ws = new WebSocket('ws://echo.websocket.org/', {
		protocolVersion: 8, 
		origin: 'http://websocket.org'
});

ws.on('open', function open() {
	console.log('connected');
	ws.send(Date.now().toString(), {mask: true});
});

ws.on('close', function close() {
	console.log('disconnected');
});

ws.on('message', function message(data, flags) {
	console.log('Roundtrip time: ' + (Date.now() - parseInt(data)) + 'ms', flags);

	setTimeout(function timeout() {
		ws.send(Date.now().toString(), {mask: true});
	}, 500);
});
