import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ExchangeRate from './ExchangeRate';
import CurrencyDropdown from './CurrencyDropdown';
import styles from './index.css';

@inject('rates')
@observer
class RateIndex extends Component {
  componentDidMount() {
    this.props.rates.fetchRates();
  }

  render() {
    const { rates } = this.props;
    return (
      <div>
        <div className={styles.currencies}>
          <CurrencyDropdown
            currencies={rates.currenciesOptions}
            onChange={rates.setFromCurrency}
            value={rates.fromCurrency} />
          <CurrencyDropdown
            currencies={rates.currenciesOptions}
            onChange={rates.setToCurrency}
            value={rates.toCurrency} />
        </div>
        <ExchangeRate
          fromCurrency={rates.fromCurrency}
          toCurrency={rates.toCurrency}
          rate={rates.rate} pending={rates.pending} />
      </div>
    )
  }
} 

export default RateIndex;