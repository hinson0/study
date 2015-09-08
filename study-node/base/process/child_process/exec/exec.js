var cp = require('child_process');

cp.exec('node worker.js', function(err, stdout, stderr) {
    console.log(1);
    console.log(err); 
    console.log(stdout); 
    console.log(stderr); 
});
