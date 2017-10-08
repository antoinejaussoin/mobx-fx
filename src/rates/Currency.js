import { observable, action } from 'mobx';

class Currency {
  iso = '';
  name = '';
  symbol = '';
  flag = '';
  @observable rate = null;

  constructor(iso, name, symbol, flag) {
    this.iso = iso;
    this.name = name;
    this.symbol = symbol;
    this.flag = flag;
  }

  @action updateRate(rate) {
    this.rate = rate;
  }
}

export default Currency;
