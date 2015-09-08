var ws = new WebSocket("ws://192.168.94.26:8080/");     

ws.onopen = function() {    
    alert("Opened");    
    ws.send("I'm client");    
};    

ws.onmessage = function (evt) {     
//    alert(evt.data);
    console.log(evt.data);
};    

ws.onclose = function() {    
    alert("Closed");    
};    

ws.onerror = function(err) {    
    alert("Error: " + err);    
};
