import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import store from './store';
import ExchangeRate from './ExchangeRate';
import CurrencyDropdown from './CurrencyDropdown';
import styles from './index.css';

@inject(() => ({ store }))
@observer
class RateIndex extends Component {
  componentDidMount() {
    this.props.store.fetchRates();
  }

  render() {
    console.log('props: ', this.props);
    const { store } = this.props;
    return (
      <div>
        <div className={styles.currencies}>
          <CurrencyDropdown
            currencies={store.currenciesOptions}
            onChange={store.setFromCurrency}
            value={store.fromCurrency} />
          <CurrencyDropdown
            currencies={store.currenciesOptions}
            onChange={store.setToCurrency}
            value={store.toCurrency} />
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