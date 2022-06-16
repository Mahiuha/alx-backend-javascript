const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('test calculate number', () => {
  it('checks the rounded sum', () => {
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
    assert.equal(calculateNumber(-1, 3), 2);
    assert.equal(calculateNumber(-1, -4), -5);
    assert.equal(calculateNumber(-1.2, -1.4), -2);
    assert.equal(calculateNumber(-2, 3.2), 1);
  });

  it('checks the NaN number', () => {
    assert.throws(() => calculateNumber(NaN, 5), '[Function: TypeError]');
  });
});
