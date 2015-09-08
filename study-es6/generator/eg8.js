'use strict';

function* fabonacci() {
  let [prev, curr] = [0, 1];  

  for (;;) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (let n of fabonacci()) {
  if (n > 100) {
    break;
  }
  console.log(n);
}

