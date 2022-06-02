const assert = require("assert");
const calculateNumber = require("./1-calcul.js");

describe("calculateNumber type == SUM", () => {
  it("checks the output", () => {
    assert.strictEqual(calculateNumber("SUM", 1.1, 2.5), 4);
    assert.strictEqual(calculateNumber("SUM", 0.0, 0), 0);
  });
  it("negative numbers", () => {
    assert.strictEqual(calculateNumber("SUM", -1, 1), 0);
    assert.strictEqual(calculateNumber("SUM", -1.5, 0), -1);
  });
  it("checks arguments", () => {
    assert.strictEqual(isNaN(calculateNumber("SUM", 2.2)), true);
    assert.strictEqual(isNaN(calculateNumber(2.2, 2.2)), true);
    assert.strictEqual(isNaN(calculateNumber(2.2)), true);
    assert.strictEqual(isNaN(calculateNumber()), true);
  });
});

describe("calculateNumber type == SUBSTRACT", () => {
  it("checks the output", () => {
    assert.strictEqual(calculateNumber("SUBSTRACT", 3.1, 2.5), 0);
    assert.strictEqual(calculateNumber("SUBSTRACT", 0.0, 5), -5);
  });
  it("negative numbers", () => {
    assert.strictEqual(calculateNumber("SUBSTRACT", -1, 1), -2);
    assert.strictEqual(calculateNumber("SUBSTRACT", -1.5, 0), -1);
  });
  it("checks arguments", () => {
    assert.strictEqual(isNaN(calculateNumber("SUBSTRACT", 2.2)), true);
    assert.strictEqual(isNaN(calculateNumber(2.2, 2.2)), true);
    assert.strictEqual(isNaN(calculateNumber(2.2)), true);
    assert.strictEqual(isNaN(calculateNumber()), true);
  });
});
describe("calculateNumber type == DIVIDE", () => {
  it("check the output", () => {
    assert.strictEqual(calculateNumber("DIVIDE", 2, 2.5), 0.6666666666666666);
    assert.strictEqual(calculateNumber("DIVIDE", 0.0, 2), 0);
  });
  it("check negative numbers", () => {
    assert.strictEqual(calculateNumber("DIVIDE", -1, 1), -1);
  });
  it("check second argument is 0", () => {
    assert.strictEqual(calculateNumber("DIVIDE", 2.2, 0), "Error");
  });
  it("check arguments", () => {
    assert.strictEqual(isNaN(calculateNumber("DIVIDE", 2.2)), true);
    assert.strictEqual(isNaN(calculateNumber("DIVIDE")), true);
    assert.strictEqual(isNaN(calculateNumber(2.2, 2.2)), true);
    assert.strictEqual(isNaN(calculateNumber(2.2)), true);
    assert.strictEqual(isNaN(calculateNumber()), true);
  });
});
