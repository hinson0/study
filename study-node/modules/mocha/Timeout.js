var should = require('should');

describe('Timeout test...', function () {
	describe('a suite of tests', function () {
		this.timeout(500);
		it('should take less than 500ms', function (done) {
			setTimeout(done, 300);
		});
		it('should take more than 500ms', function (done) {
			setTimeout(done, 1000);
		});
	});	
});
