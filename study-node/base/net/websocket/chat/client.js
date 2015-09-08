var url = 'ws://192.168.94.26:8082';
var ws = new WebSocket(url);

ws.onopen = function () {
  $('#chat-box').append('已连接到服务器......<br/>');
};

ws.onmessage = function (e) {
  $('#chat-box').append(e.data + '<br />');
};

function send() {
  ws.send('<strong style="color:red">' + $('#nike').val() + ':</strong>' + $('#talk').val());
}