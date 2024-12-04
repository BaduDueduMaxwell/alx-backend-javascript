const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function () {
  it("should return the sum of two integers", function () {
    assert.strictEqual(calculateNumber("SUM", 1.4, 4.5), 6);
  });

  it("should return the substraction of two integers", function () {
    assert.strictEqual(calculateNumber("SUBTRACT", 1.4, 4.5), -4);
  });

  it("should return the division of two integers", function () {
    assert.strictEqual(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
  });

  it("should return the division of two integers with b as 0", function () {
    assert.strictEqual(calculateNumber("DIVIDE", 1.4, 0), "Error");
  });
});
