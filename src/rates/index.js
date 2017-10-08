import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import store from './store';
import ExchangeRate from './components/ExchangeRate';
import CurrencyDropdown from './components/CurrencyDropdown';
import styles from './index.css';

@inject(() => ({ store }))
@observer
class RateIndex extends Component {
  componentDidMount() {
    // this.props.store.fetchRates();
  }

  render() {
    const { store } = this.props;
    return (
      <div>
        <div className={styles.currencies}>
          <CurrencyDropdown
            currencies={store.currenciesOptions}
            onChange={store.setFromCurrency}
            value={store.fromCurrency.iso} />
          <CurrencyDropdown
            currencies={store.currenciesOptions}
            onChange={store.setToCurrency}
            value={store.toCurrency.iso} />
        </div>
        <ExchangeRate
          fromCurrency={store.fromCurrency}
          toCurrency={store.toCurrency}
          rate={store.rate} pending={store.pending} />
      </div>
    )
  }
} 

export default RateIndex;