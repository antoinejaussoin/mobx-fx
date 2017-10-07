import { observable, action } from 'mobx';

class Currency {
  iso = '';
  name = '';
  @observable rate = null;

  constructor(iso, name) {
    this.iso = iso;
    this.name = name;
  }

  @action updateRate(rate) {
    this.rate = rate;
  }
}

export default Currency;
