const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('test calculate number', () => {
  it('checks the rounded sum', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    expect(calculateNumber('SUM', -1, 3)).to.equal(2);
    expect(calculateNumber('SUM', -1, -4)).to.equal(-5);
    expect(calculateNumber('SUM', -1.2, -1.4)).to.equal(-2);
    expect(calculateNumber('SUM', -2, 3.2)).to.equal(1);
  });

  it('checks the rounded difference', () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 3.3, 1)).to.equal(2);
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', -1, 3)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', -1, -4)).to.equal(3);
    expect(calculateNumber('SUBTRACT', -1.2, -1.4)).to.equal(0);
    expect(calculateNumber('SUBTRACT', -2, 3.2)).to.equal(-5);
  });

  it('checks the rounded division', () => {
    expect(calculateNumber('DIVIDE', 6, 2)).to.equal(3);
    expect(calculateNumber('DIVIDE', 3.3, 1)).to.equal(3);
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 1.7, 3.7)).to.equal(0.5);
    expect(calculateNumber('DIVIDE', -6, 3)).to.equal(-2);
    expect(calculateNumber('DIVIDE', -6, -3)).to.equal(2);
    expect(calculateNumber('DIVIDE', -6.2, -3.4)).to.equal(2);
    expect(calculateNumber('DIVIDE', -2, 2.1)).to.equal(-1);
    expect(calculateNumber('DIVIDE', -2, 0)).to.equal('Error');
  });


  it('checks the NaN number', () => {
    expect(() => calculateNumber('SUM', NaN, 5)).to.throw();
    expect(() => calculateNumber('SUBTRACT', NaN, 5)).to.throw();
    expect(() => calculateNumber('DIVIDE', NaN, 5)).to.throw();
    expect(() => calculateNumber('shhh', NaN, 5)).to.throw();
  });
});
