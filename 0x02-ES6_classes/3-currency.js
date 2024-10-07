export default class Currency {
  constructor(code, name) {
    this._code = this._validateString(code, 'Code');
    this._name = this._validateString(name, 'Name');
  }

  // Getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Setters
  set code(value) {
    this._code = this._validateString(value, 'Code');
  }

  set name(value) {
    this._name = this._validateString(value, 'Name');
  }

  /* eslint-disable class-methods-use-this */
  _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }
  /* eslint-disable class-methods-use-this */

  // Method to display full currency
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
