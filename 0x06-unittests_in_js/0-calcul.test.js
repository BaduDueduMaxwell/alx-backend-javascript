const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", function () {
  it("should return the sum of two integers", function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it("should round a decimal number and returrn the correct sum", function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it("should round both numbeers and return the correct sum", function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it("should round both numbers up and return the correct sum", function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it("should handle negative numbers correctly", function () {
    assert.strictEqual(calculateNumber(-1.4, -3.6), -5);
  });
});
