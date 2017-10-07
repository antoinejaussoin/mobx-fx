import { observable, computed, action } from 'mobx';
import numeral from 'numeral';

const formatAmount = amount => numeral(amount).format('0,0.00');

export default class ConverterStore {
  constructor(root) {
    this.root = root;
  }
  @observable fromAmount = 1000;
  @observable toAmount = null;

  @action updateFromAmount = (amount) => {
    this.fromAmount = numeral(amount).value();
    this.toAmount = null;
  }

  @action updateToAmount = (amount) => {
    this.toAmount = numeral(amount).value();
    this.fromAmount = null;
  }

  @computed get convertedFromAmount() {
    return this.fromAmount || formatAmount(this.toAmount / this.rate);
  }

  @computed get convertedToAmount() {
    return this.toAmount || formatAmount(this.fromAmount * this.rate);
  }

  @computed get rate() {
    return this.root.rates.rate;
  }

  @computed get fromCurrency() {
    return this.root.rates.fromCurrency;
  }

  @computed get toCurrency() {
    return this.root.rates.toCurrency;
  }

  @computed get isLeftToRight() {
    return this.toAmount === null;
  }
}
