const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function () {
    describe('sum', function () {
	it('should work without rounding', function () {
	    expect(calculateNumber('SUM', 3, 4)).to.equal(7);
	});
	it('should work with rounding', function () {
	    expect(calculateNumber('SUM', 3.4, 4.2)).to.equal(7);
	});
	it('should work without rounding', function () {
	    expect(calculateNumber('SUM', 3.0, 4.0)).to.equal(7);
	});
	it('should work without rounding', function () {
	    expect(calculateNumber('SUM', -3, 4)).to.equal(1);
	});
	it('should work without rounding', function () {
	    expect(calculateNumber('SUM', 3, - 4)).to.equal(-1);
	});
	it('should work with rounding', function () {
	    expect(calculateNumber('SUM', -3.4, 4.5)).to.equal(2);
	});
	it('should work with rounding', function () {
	    expect(calculateNumber('SUM', -3.5, 2)).to.equal(-1);
	});
    });
    describe('subtract', function () {
	it('should work without rounding', function () {
	    expect(calculateNumber('SUBTRACT', 3, 4)).to.equal(-1);
	});
	it('should work with rounding', function () {
	    expect(calculateNumber('SUBTRACT', 3.4, 4.2)).to.equal(-1);
	});
	it('should work without rounding', function () {
	    expect(calculateNumber('SUBTRACT', 3.0, 4.0)).to.equal(-1);
	});
	it('should work without rounding', function () {
	    expect(calculateNumber('SUBTRACT', -3, 4)).to.equal(-7);
	});
	it('should work without rounding', function () {
	    expect(calculateNumber('SUBTRACT', 3, -4)).to.equal(7);
	});
	it('should work with rounding', function () {
	    expect(calculateNumber('SUBTRACT', -3.4, 4.5)).to.equal(-8);
	});
	it('should work with rounding', function () {
	    expect(calculateNumber('SUBTRACT', -3.5, 2)).to.equal(-5);
	});
    });
    describe('divide', function () {
	it('should work without rounding', function () {
	    expect(calculateNumber('DIVIDE', 3, 4)).to.equal(0.75);
	});
	it('should work with rounding', function () {
	    expect(calculateNumber('DIVIDE', 3.4, 4.2)).to.equal(0.75);
	});
	it('should work without rounding', function () {
	    expect(calculateNumber('DIVIDE', 3.0, 4.0)).to.equal(0.75);
	});
	it('should work without rounding', function () {
	    expect(calculateNumber('DIVIDE', -3, 4)).to.equal(-0.75);
	});
	it('should work without rounding', function () {
	    expect(calculateNumber('DIVIDE', 3, -4)).to.equal(-0.75);
	});
	it('should work with rounding', function () {
	    expect(calculateNumber('DIVIDE', -3.4, 4.5)).to.equal(-0.6);
	});
	it('should work with rounding', function () {
	    expect(calculateNumber('DIVIDE', -3.5, 2)).to.equal(-1.5);
	});
	it('should work with rounding', function () {
	    expect(calculateNumber('DIVIDE', -3.5, .4)).to.equal('Error');
	});
    });
})
