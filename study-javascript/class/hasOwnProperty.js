
function Person() {
    
}

Person.prototype.age = 10;
Person.prototype.name = 'yzb';

var person1 = new Person();
var person2 = new Person();

console.log(person1.hasOwnProperty('age'));
console.log(person1.hasOwnProperty('name'));

person1.name = 'cgh';
console.log(person1.hasOwnProperty('name'));


console.log(person1.getOwnPropertyDescriptor());
