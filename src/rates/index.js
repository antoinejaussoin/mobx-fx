import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ExchangeRate from './ExchangeRate';
import CurrencyDropdown from './CurrencyDropdown';

@inject('rates')
@observer
class RateIndex extends Component {
  componentDidMount() {
    this.props.rates.fetchRates();
  }

  render() {
    const { rates } = this.props;
    console.log('injected: ', this.props);
    return (
      <div>
        <CurrencyDropdown
          currencies={rates.currenciesOptions}
          onChange={rates.setFromCurrency}
          value={rates.fromCurrency} />
        <CurrencyDropdown
          currencies={rates.currenciesOptions}
          onChange={rates.setToCurrency}
          value={rates.toCurrency} />
        <ExchangeRate rate={rates.rate} pending={rates.pending} />
      </div>
    )
  }
} 

export default RateIndex;