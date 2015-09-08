var fs = require('fs');

var reader = fs.createReadStream('in.txt');
var writer = fs.createWriteStream('out.txt');

// reader.pipe(writer);


reader.on('data', function (chunk) {
  writer.write(chunk);
});

reader.on('end', function () {
  writer.end();
});
