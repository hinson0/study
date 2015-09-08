function A() {

}

A.prototype.a = 1;

var a = new A();
console.log(a); // {}

// var result = a.__proto__ === A.prototype;
// console.log(result) ;
// 
// var result2 = A.prototype.__proto__ === Object.prototype;
// console.log(result2);
// 
// var result3 = A.__proto__ === Function.prototype;
// console.log(result3);

function B(a) {
  this.a = a;
}

B.prototype.a = 1;

var b = new B();
console.log(b); // {a: undefined}


function C(a) {
  if (a) {
    this.a = a;
  }
}

C.prototype.a = 1;

var c = new C(2);
console.log(c); // {a: 2}
console.log(c.a); // 2

var c2 = new C(0);
console.log(c2); // {}
console.log(c2.a); // 1
