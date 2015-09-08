var util = require('util');

function Base() {
    this.name = 'base';
    this.base = 1991;

    this.sayHello = function() {
        console.log('Hello ' + this.name);
    }
}

Base.prototype.showName = function() {
    console.log(this.name);
}

function Sub() {
    this.name = 'sub';
}

util.inherits(Sub, Base);

var base1 = new Base();
base1.showName();
base1.sayHello();
console.log(base1);

var sub1 = new Sub();
sub1.showName();
// sub1.sayHello();
console.log(sub1);
