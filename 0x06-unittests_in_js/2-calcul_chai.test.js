const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require("./1-calcul.js");

describe('calculateNumberWithType', () => {
  it('sum two numbers', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });
  it('subtract two numbers', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it('divide two numbers', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('divide with b == 0', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('ERROR');
  });
});
