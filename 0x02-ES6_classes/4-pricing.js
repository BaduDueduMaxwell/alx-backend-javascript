/* eslint-disable import/extensions */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount; // Store amount
    this._currency = currency; // Store currency
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
  
  get currency() {
    return this._currency;
  }
  
  displayFullPrice() {
    return `${this.amount} ${this.currency._name} (${this.currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return `${amount * conversionRate}`;
  }
}
