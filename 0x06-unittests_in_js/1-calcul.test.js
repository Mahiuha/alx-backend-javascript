const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('test calculate number', () => {
  it('checks the rounded sum', () => {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
    assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    assert.equal(calculateNumber('SUM', -1, 3), 2);
    assert.equal(calculateNumber('SUM', -1, -4), -5);
    assert.equal(calculateNumber('SUM', -1.2, -1.4), -2);
    assert.equal(calculateNumber('SUM', -2, 3.2), 1);
  });

  it('checks the rounded difference', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    assert.equal(calculateNumber('SUBTRACT', 3.3, 1), 2);
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    assert.equal(calculateNumber('SUBTRACT', -1, 3), -4);
    assert.equal(calculateNumber('SUBTRACT', -1, -4), 3);
    assert.equal(calculateNumber('SUBTRACT', -1.2, -1.4), 0);
    assert.equal(calculateNumber('SUBTRACT', -2, 3.2), -5);
  });

  it('checks the rounded division', () => {
    assert.equal(calculateNumber('DIVIDE', 6, 2), 3);
    assert.equal(calculateNumber('DIVIDE', 3.3, 1), 3);
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.equal(calculateNumber('DIVIDE', 1.7, 3.7), 0.5);
    assert.equal(calculateNumber('DIVIDE', -6, 3), -2);
    assert.equal(calculateNumber('DIVIDE', -6, -3), 2);
    assert.equal(calculateNumber('DIVIDE', -6.2, -3.4), 2);
    assert.equal(calculateNumber('DIVIDE', -2, 2.1), -1);
    assert.equal(calculateNumber('DIVIDE', -2, 0), 'Error');
  });


  it('checks the NaN number', () => {
    assert.throws(() => calculateNumber('SUM', NaN, 5), '[Function: TypeError]');
    assert.throws(() => calculateNumber('SUBTRACT', NaN, 5), '[Function: TypeError]');
    assert.throws(() => calculateNumber('DIVIDE', NaN, 5), '[Function: TypeError]');
    assert.throws(() => calculateNumber('shhh', NaN, 5), '[Function: TypeError]');
  });
});
