var util = require('util');

function Person() {
    this.name = 'person';

    this.toString = function() {
        return 1;
    }
}

console.log(Person);
console.log(util.inspect(Person));

var person1 = new Person();
console.log(person1);
console.log(util.inspect(person1));
console.log(util.inspect(person1, true));
