var str = '*\你?好' +
':|世' +
'界';

var title = str.replace(/[\\/:\*\?"\|\n\r]/g, '');

console.log(title);
