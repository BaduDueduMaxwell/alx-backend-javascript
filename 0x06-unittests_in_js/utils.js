/**
 * Function to calculate a number based on the type (SUM, SUBTRACT, DIVIDE).
 * @param {string} type - The type of operation to perform: SUM, SUBTRACT, or DIVIDE.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} The result of the operation or 'Error' if invalid.
 */
function calculateNumber(type, a, b) {
  if (type === "SUM") {
    return Math.round(a) + Math.round(b);
  } else if (type === "SUBTRACT") {
    return Math.round(a) - Math.round(b);
  } else if (type === "DIVIDE") {
    if (Math.round(b) === 0) {
      return "Error";
    }
    return Math.round(a) / Math.round(b);
  }
  return undefined;
}

module.exports = { calculateNumber };
