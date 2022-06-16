const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber', () => {
  it('number plus round number', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('two round numbers', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  })
  it('testing with zero', () => {
    assert.equal(calculateNumber(0, 0), 0);
    assert.equal(calculateNumber(0, 0.0), 0);
  })
  it('number of params', () => {
    assert(isNaN(calculateNumber()));
    assert(isNaN(calculateNumber(0,)));
    assert(isNaN(calculateNumber(0)));
  })
});
