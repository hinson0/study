'use strict';

let assert = require('assert');
let co = require('co');

function sleep(ms) {
  return function(done){
    setTimeout(done, ms);
  }
}

function *work() {
  yield sleep(50);
  return 'yay';
}

describe('co(*)', function(){
  describe('with a generator function', function(){
    it('should wrap with co()', function(){
      return co(function *(){
        var a = yield work;
        var b = yield work;
        var c = yield work;
        
        console.log(a);
        console.log(b);
        console.log(c);

        assert('yay' == a);
        assert('yay' == b);
        assert('yay' == c);

        var res = yield [work, work, work];
        assert.deepEqual(['yay', 'yay', 'yay'], res);
      });
    })

    it('should catch errors', function(){
      return co(function *(){
        yield function *(){
          throw new Error('boom');
        };
      }).then(function () {
        throw new Error('wtf')
      }, function (err) {
        assert(err);
        assert(err.message == 'boom');
      });
    })
  })
})
