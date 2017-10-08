import React from 'react';
import { flow } from 'lodash-es';
import { observer, inject } from 'mobx-react';
import store from './store';
import { Icon } from 'semantic-ui-react';
import Amount from './Amount';
import styles from './index.css';

const CalculatorIndex = ({ store }) => (
  <div className={styles.container}>
    <Amount
      amount={store.convertedFromAmount}
      onChange={store.updateFromAmount}
      highlighted={store.isLeftToRight}
      currency={store.fromCurrency} />

    <Icon
      name={store.isLeftToRight ? 'arrow right' : 'arrow left'}
      size="big"
      color="blue"
      circular
    />
    
    <Amount
      amount={store.convertedToAmount}
      onChange={store.updateToAmount}
      highlighted={!store.isLeftToRight}
      currency={store.toCurrency} />
  </div>
);

const decorators = flow([
  observer,
  inject(() => ({ store }))
]);

export default decorators(CalculatorIndex);
