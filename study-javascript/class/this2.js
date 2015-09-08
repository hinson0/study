var x = 10;

function foo() {
	console.log(this);
	console.log(this.x);
}

foo();
