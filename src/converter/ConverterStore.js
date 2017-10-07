import { observable, computed, action } from 'mobx';

class ConverterStore {
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
    return this.fromAmount || this.toAmount /2;
  }

  @computed get convertedToAmount() {
    return this.toAmount || this.fromAmount * 2;
  }

}

const store = new ConverterStore();

export default store;