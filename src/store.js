import { action } from 'mobx';
import rateStore from './rates/store';

export class RootStore {
  constructor(ratesStore) {
    this.ratesStore = ratesStore;
  }
  @action initialise() {
    this.ratesStore.fetchRates();
  }
}

export default new RootStore(rateStore);