function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

hw.next(); // { value: 'hello', done: false }
hw.next(); // { value: 'world', done: false }
hw.next(); // { value: 'ending', done: false }
hw.next(); // { value: undefined, done: false }
hw.next(); // 以后都是 { value: undefined, done: false }

// 在命令行模式下运行
