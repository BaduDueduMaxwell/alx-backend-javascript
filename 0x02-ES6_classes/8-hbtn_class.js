export default class HolbertonClass {
  constructor(size, location) {
    this._size = this._validateNumber(size, 'Size'); // Corrected
    this._location = this._validateString(location, 'Location'); // Corrected
  }

  _validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} should be a number`);
    }
    return value;
  }

  _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} should be a string`);
    }
    return value;
  }

  toString() {
    return `${this._size}\n${this._location}`;
  }
}
