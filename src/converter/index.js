import React from 'react';
import { flow } from 'lodash-es';
import { observer, inject } from 'mobx-react';
import { Icon } from 'semantic-ui-react';
import Amount from './Amount';
import styles from './index.css';

const CalculatorIndex = ({ converter }) => (
  <div className={styles.container}>
    <Amount
      amount={converter.convertedFromAmount}
      onChange={converter.updateFromAmount}
      highlighted={converter.isLeftToRight}
      currency={converter.fromCurrency} />

    <Icon
      name={converter.isLeftToRight ? 'arrow right' : 'arrow left'}
      size="big"
      color="blue"
      circular
    />
    
    <Amount
      amount={converter.convertedToAmount}
      onChange={converter.updateToAmount}
      highlighted={!converter.isLeftToRight}
      currency={converter.toCurrency} />
  </div>
);

const decorators = flow([
  observer,
  inject('converter')
]);

export default decorators(CalculatorIndex);
