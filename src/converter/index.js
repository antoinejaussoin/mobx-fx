import React from 'react';
import { observer } from 'mobx-react';
import store from './ConverterStore';
import Amount from './Amount';

const CalculatorIndex = () => (
  <div>
    <Amount
      amount={store.convertedFromAmount}
      onChange={store.updateFromAmount}
      currency="EUR" />
    
    <Amount
      amount={store.convertedToAmount}
      onChange={store.updateToAmount}
      currency="USD" />
  </div>
);

export default observer(CalculatorIndex);
