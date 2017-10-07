import React from 'react';
import { flow } from 'lodash-es';
import { observer, inject } from 'mobx-react';
import store from './ConverterStore';
import Amount from './Amount';

const CalculatorIndex = ({ converter }) => (
  <div>
    <Amount
      amount={converter.convertedFromAmount}
      onChange={converter.updateFromAmount}
      currency={converter.fromCurrency} />
    
    <Amount
      amount={converter.convertedToAmount}
      onChange={converter.updateToAmount}
      currency={converter.toCurrency} />
  </div>
);

const decorators = flow([
  observer,
  inject('converter')
]);

export default decorators(CalculatorIndex);
