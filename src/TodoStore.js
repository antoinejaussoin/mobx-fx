import { observable, action, computed, useStrict } from 'mobx';

useStrict(true);

class MainStore {
  @observable number1 = 0;
  @observable number2 = 0;
  @computed get total() {
    return this.number1 + this.number2;
  }
  @action setNumber1 = number => {
    this.number1 = number;
  }
  @action setNumber2 = number => {
    this.number2 = number;
  }
}

const store = new MainStore();

export default store;
export { MainStore };