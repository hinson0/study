var showMem = function () {
  var mem = process.memoryUsage();
  var format = function (bytes) {
    return (bytes / 1024 / 1024).toFixed(2) + 'MB';
  };
  console.log('process:heapTotal ' + format(mem.heapTotal) + ' heapUsed ' + format(mem.heapUsed) + ' rss ' + format(mem.rss));
  console.log('--------------------------------');
};

var useMem = function () {
  var size = 20 * 1024 * 1024;
  var buffer = new Buffer(size);
  for (var i = 0; i < size; i++) {
    buffer[i] = 0;
  }
  return buffer;
};

// showMem();
// useMem();
// showMem();

var total = [];
for (var i = 0; i < 15; i++) {
  showMem();
  total.push(useMem());
}
showMem();
