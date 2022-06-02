const assert = require("assert");
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
    describe('sum', function () {
	it('should work without rounding', function () {
	    assert.equal(calculateNumber('SUM', 3, 4), 7);
	});
	it('should work with rounding', function () {
	    assert.equal(calculateNumber('SUM', 3.4, 4.2), 7);
	});
	it('should work without rounding', function () {
	    assert.equal(calculateNumber('SUM', 3.0, 4.0), 7);
	});
	it('should work without rounding', function () {
	    assert.equal(calculateNumber('SUM', -3, 4), 1);
	});
	it('should work without rounding', function () {
	    assert.equal(calculateNumber('SUM', 3, - 4), -1);
	});
	it('should work with rounding', function () {
	    assert.equal(calculateNumber('SUM', -3.4, 4.5), 2);
	});
	it('should work with rounding', function () {
	    assert.equal(calculateNumber('SUM', -3.5, 2), -1);
	});
    });
    describe('subtract', function () {
	it('should work without rounding', function () {
	    assert.equal(calculateNumber('SUBTRACT', 3, 4), -1);
	});
	it('should work with rounding', function () {
	    assert.equal(calculateNumber('SUBTRACT', 3.4, 4.2), -1);
	});
	it('should work without rounding', function () {
	    assert.equal(calculateNumber('SUBTRACT', 3.0, 4.0), -1);
	});
	it('should work without rounding', function () {
	    assert.equal(calculateNumber('SUBTRACT', -3, 4), -7);
	});
	it('should work without rounding', function () {
	    assert.equal(calculateNumber('SUBTRACT', 3, -4), 7);
	});
	it('should work with rounding', function () {
	    assert.equal(calculateNumber('SUBTRACT', -3.4, 4.5), -8);
	});
	it('should work with rounding', function () {
	    assert.equal(calculateNumber('SUBTRACT', -3.5, 2), -5);
	});
    });
    describe('divide', function () {
	it('should work without rounding', function () {
	    assert.equal(calculateNumber('DIVIDE', 3, 4), 0.75);
	});
	it('should work with rounding', function () {
	    assert.equal(calculateNumber('DIVIDE', 3.4, 4.2), 0.75);
	});
	it('should work without rounding', function () {
	    assert.equal(calculateNumber('DIVIDE', 3.0, 4.0), 0.75);
	});
	it('should work without rounding', function () {
	    assert.equal(calculateNumber('DIVIDE', -3, 4), -0.75);
	});
	it('should work without rounding', function () {
	    assert.equal(calculateNumber('DIVIDE', 3, -4), -0.75)
	});
	it('should work with rounding', function () {
	    assert.equal(calculateNumber('DIVIDE', -3.4, 4.5), -0.6);
	});
	it('should work with rounding', function () {
	    assert.equal(calculateNumber('DIVIDE', -3.5, 2), -1.5)
	});
	it('should work with rounding', function () {
	    assert.equal(calculateNumber('DIVIDE', -3.5, .4), 'Error')
	});
    });
})
