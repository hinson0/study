'use strict';

// Create a user-defined object.
var obj = {};

// Add a data property to the object.
Object.defineProperty(obj, "newDataProperty", {
    value: 101,
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(obj.newDataProperty);

obj.newDataProperty = 102;

console.log(obj.newDataProperty);

Object.defineProperty(obj, 'newDataProperty', {writable: false});

// obj.newDataProperty = 103; // cannot assign read only property newDataProperty of object  

let descriptor = Object.getOwnPropertyDescriptor(obj, 'newDataProperty');
console.log(descriptor);



