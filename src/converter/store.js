import { observable, computed, action } from 'mobx';
import numeral from 'numeral';
import rateStore from '../rates/store';

const formatAmount = amount => numeral(amount).format('0,0.00');

export class ConverterStore {
  // This store will need the rates, so we inject that other store here. This will allow mocking it for testing.
  constructor(ratesStore) {
    this.ratesStore = ratesStore;
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

  // This is probably unecessary, since we can access the ratesStore from this store, but I thought it's nicer
  @computed get rate() {
    return this.ratesStore.rate;
  }

  @computed get fromCurrency() {
    return this.ratesStore.fromCurrency;
  }

  @computed get toCurrency() {
    return this.ratesStore.toCurrency;
  }

  @computed get isLeftToRight() {
    return this.toAmount === null;
  }
}

export default new ConverterStore(rateStore);