import { observable, computed, action, useStrict } from 'mobx';
import { find } from 'lodash';
import Currency from './Currency';
import api from './api';

useStrict(true);

export class ExchangeRateStore {
  constructor(api) {
    this.api = api;
  }

  @observable currencies = [
    new Currency('GBP', 'British Pound', '£', 'gb'),
    new Currency('EUR', 'Euro', '€', 'eu'),
    new Currency('USD', 'United States Dollar', '$', 'us')
  ];
  @observable fromCurrency = this.currencies[0];
  @observable toCurrency = this.currencies[1];
  @observable pending = false;

  @action setFromCurrency = (iso) => {
    this.fromCurrency = find(this.currencies, { iso });
  }

  @action setToCurrency = (iso) => {
    this.toCurrency = find(this.currencies, { iso });
  }

  @computed get currenciesOptions() {
    return this.currencies.map(cur => ({
      text: cur.name,
      value: cur.iso,
      flag: cur.flag,
      key: cur.iso
    }));
  }

  @computed get rate() {
    if (!this.toCurrency.rate || !this.fromCurrency.rate) {
      return null;
    }
    return this.toCurrency.rate / this.fromCurrency.rate;
  }
  
  @action fetchRates = () => {
    this.pending = true;
    return this.api.fetchRates()
      .then(rates => {
        this.currencies.forEach(currency => {
          if (currency.iso === 'USD') {
            currency.updateRate(1);
          } else {
            currency.updateRate(rates[currency.iso]);
          }
        });
        this.pending = false;
      })
      .catch(error => {
        this.pending = false;
        throw error;
      });
  }
}

export default new ExchangeRateStore(api);