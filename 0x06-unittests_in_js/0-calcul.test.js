const calculatorNumber = require('./0-calcul.js');
const assert = require('assert');
 
describe('calculateNumber', () => {
    it('checks the output', () => {
      assert.strictEqual(calculateNumber(1, 3), 4);
      assert.strictEqual(calculateNumber(1, 3.7), 5);
      assert.strictEqual(calculateNumber(1.2, 3.7), 5);
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
      assert.strictEqual(calculateNumber(3.7, 1), 5);
      assert.strictEqual(calculateNumber(3.7, 1.2), 5);
    });
    it('negative numbers', () => {
      assert.strictEqual(calculateNumber(-1, 1), 0);
      assert.strictEqual(calculateNumber(1, -1), 0);
      assert.strictEqual(calculateNumber(-1, -1), -2);
    });
    it('checks arguments', () => {
      assert.strictEqual(isNaN(calculateNumber(1)), true);
      assert.strictEqual(isNaN(calculateNumber()), true);
    });
  });
