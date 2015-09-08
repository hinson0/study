function Person(name, age) {
  this.age = age;
  this.name = name;
}

Person.prototype.myself = function () {
  console.log('my name is ' + this.name + ', age is ' + this.age);
}

module.exports = Person;
