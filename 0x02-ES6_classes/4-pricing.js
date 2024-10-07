export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Setters
  set amount(value) {
    this._amount = value;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency._name} (${this.currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
