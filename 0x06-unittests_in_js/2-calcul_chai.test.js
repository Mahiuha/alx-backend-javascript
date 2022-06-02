'use strict';
const chai = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber type == SUM', () => {
  it('checks the output', () => {
    chai.expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    chai.expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    chai.expect(calculateNumber('SUM', 3.7, 1)).to.equal(5);
    chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    chai.expect(calculateNumber('SUM', 4.5, 1.4)).to.equal(6);
    chai.expect(calculateNumber('SUM', 0.0, 0)).to.equal(0);
    chai.expect(calculateNumber('SUM', -1, 1)).to.equal(0);
    chai.expect(calculateNumber('SUM', 1, -1)).to.equal(0);
    chai.expect(calculateNumber('SUM', -1, -1)).to.equal(-2);
  });
});
describe('calculateNumber type == SUBTRACT', () => {
  it('checks the output', () => {
    chai.expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
    chai.expect(calculateNumber('SUBTRACT', 3.1, 2.5)).to.equal(0);
    chai.expect(calculateNumber('SUBTRACT', 4.5, 2)).to.equal(3);
    chai.expect(calculateNumber('SUBTRACT', 0.0, 5)).to.equal(-5);
    chai.expect(calculateNumber('SUBTRACT', 2, 4.5)).to.equal(-3);
    chai.expect(calculateNumber('SUBTRACT', -1, 1)).to.equal(-2);
    chai.expect(calculateNumber('SUBTRACT', -1.5, 0)).to.equal(-1);
  });
});
describe('calculateNumber type == DIVIDE', () => {
  it('check the output', () => {
    chai.expect(calculateNumber('DIVIDE', 16, 2)).to.equal(8);
    chai.expect(calculateNumber('DIVIDE', 2, 9.5)).to.equal(0.2);
    chai.expect(calculateNumber('DIVIDE', 9.5, 2)).to.equal(5);
    chai.expect(calculateNumber('DIVIDE', 0.0, 2)).to.equal(0);
    chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    chai.expect(calculateNumber('DIVIDE', -1, 1)).to.equal(-1);
    chai.expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
    chai.expect(calculateNumber('DIVIDE', 10.7, 0.2)).to.equal('Error');
  });
});
