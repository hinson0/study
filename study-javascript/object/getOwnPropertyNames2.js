'use strict';

function ParentClass() {}
ParentClass.prototype.inheritedMethod = function() {};

function ChildClass() {
    this.prop = 5;
    this.method = function() {};
}

ChildClass.prototype = new ParentClass;

ChildClass.prototype.prototypeMethod = function() {};
let child = new ChildClass();
console.log(Object.getOwnPropertyNames(child)); // ["prop", "method"])
