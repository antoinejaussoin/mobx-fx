import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from './ExchangeRateStore';
import ExchangeRate from './ExchangeRate';
import CurrencyDropdown from './CurrencyDropdown';

window.fx = store; // for debugging

@observer
class RateIndex extends Component {
  componentDidMount() {
    store.fetchRates();
  }

  render() {
    return (
      <div>
        <CurrencyDropdown
          currencies={store.currenciesOptions}
          onChange={store.setFromCurrency}
          value={store.fromCurrency} />
        <CurrencyDropdown
          currencies={store.currenciesOptions}
          onChange={store.setToCurrency}
          value={store.toCurrency} />
        <ExchangeRate rate={store.rate} pending={store.pending} />
      </div>
    )
  }
} 

export default RateIndex;