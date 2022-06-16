const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe('calculateNumberWithType', () => {
  it('sum two numbers', () => {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('subtract two numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('divide two numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('divide with b == 0', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'ERROR');
  });
});
