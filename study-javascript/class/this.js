var x = 10;
exports.x = 12;

console.log(this.x);

module.exports.x = 13;

console.log(this.x);

console.log(this);
