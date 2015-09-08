var [a, b, c] = [1, 2, 3];
console.log(a, b, c);


let [, , third] = ['foo', 'bar', 'baz'];
console.log(third);

let [head, ...tail] = [1, 2, 3, 4];
console.log(head);
console.log(tail);
