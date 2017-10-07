import ConverterStore from './converter/ConverterStore';
import RatesStore from './rates/ExchangeRateStore';

class RootStore {
  constructor() {
    this.converter = new ConverterStore(this);
    this.rates = new RatesStore(this);
  }
}

export default new RootStore();