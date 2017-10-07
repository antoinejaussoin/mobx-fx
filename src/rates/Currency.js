import { observable, action } from 'mobx';

class Currency {
  iso = '';
  name = '';
  symbol = '';
  @observable rate = null;

  constructor(iso, name, symbol) {
    this.iso = iso;
    this.name = name;
    this.symbol = symbol;
  }

  @action updateRate(rate) {
    this.rate = rate;
  }
}

export default Currency;
