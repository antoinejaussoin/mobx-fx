import { observable, computed, action } from 'mobx';

export default class ConverterStore {
  constructor(root) {
    this.root = root;
  }
  @observable fromAmount = 1000;
  @observable toAmount = null;

  @action updateFromAmount = (amount) => {
    this.fromAmount = amount;
    this.toAmount = null;
  }

  @action updateToAmount = (amount) => {
    this.toAmount = amount;
    this.fromAmount = null;
  }

  @computed get convertedFromAmount() {
    return this.fromAmount || this.toAmount / this.rate;
  }

  @computed get convertedToAmount() {
    return this.toAmount || this.fromAmount * this.rate;
  }

  @computed get rate() {
    return this.root.rates.rate;
  }

  @computed get fromCurrency() {
    return this.root.rates.fromCurrency.iso;
  }

  @computed get toCurrency() {
    return this.root.rates.toCurrency.iso;
  }
}
