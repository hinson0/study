var should = require('should');
var fs = require('fs');

describe('Async', function () {
	describe('#fs.readFile()', function () {
		it('fs.readFile should be ok', function (done) {
			fs.readFile('hello.txt', 'utf-8', function (err, data) {
				should.not.exist(err);
				done();
			});
		});
	});
});
