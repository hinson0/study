'use strict';

class Book {
  constructor() {
  }

  get name() {
    return '123';
  }
  set name(value) {
    console.log(1);
  }
}

let book = new Book();
book.name = 'nodejs';
console.log(book.name);
