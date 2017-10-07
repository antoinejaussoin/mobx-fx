import { observable, computed, action, useStrict } from 'mobx';
import Currency from './Currency';

useStrict(true);

export default class ExchangeRateStore {
  constructor(root) {
    this.root = root;
  }

  @observable currencies = [
    new Currency('GBP', 'British Pound', '£'),
    new Currency('EUR', 'Euro', '€'),
    new Currency('USD', 'United States Dollar', '$')
  ];
  @computed get currenciesOptions() {
    return this.currencies.map(cur => ({
      text: cur.name,
      value: cur
    }));
  }
  @observable fromCurrency = this.currencies[0];
  @observable toCurrency = this.currencies[1];

  @action setFromCurrency = (iso) => {
    this.fromCurrency = iso;
  }

  @action setToCurrency = (iso) => {
    this.toCurrency = iso;
  }

  @computed get rate() {
    return this.toCurrency.rate / this.fromCurrency.rate;
  }
  
  @observable pending = false;
  @action fetchRates = () => {
    this.pending = true;
    fetch('https://api.fixer.io/latest?base=USD').then(response => {
      if (response.status >= 400) {
        this.pending = false;
        throw new Error('Bad response');
      }
      return response.json();
    }).then(data => {
      console.log('data: ', data);
      this.currencies.forEach(currency => {
        if (currency.iso === 'USD') {
          currency.updateRate(1);
        } else {
          currency.updateRate(data.rates[currency.iso]);
        }
      });
      this.pending = false;
    });
  }
}

// const store = new ExchangeRateStore();

// export default store;
// export { ExchangeRateStore };