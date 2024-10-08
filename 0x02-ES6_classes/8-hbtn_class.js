export default class HolbertonClass {
  constructor(size, location) {
    this._size = this._validateNumber(size, 'Size'); // Corrected
    this._location = this._validateString(location, 'Location'); // Corrected
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return `${this._size}\n${this._location}`;
  }
}
