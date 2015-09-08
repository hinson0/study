
function Person(age, length) {
    this.age = age;
    this.length = length;
};

Person.prototype.say = function() {
    console.log('hello world');
}
Person.prototype.program = function() {
    console.log('i am a programer');
}

var yzb = new Person(28, 171);
console.log(yzb.age);
console.log(yzb.length);

yzb.say();
yzb.program();
