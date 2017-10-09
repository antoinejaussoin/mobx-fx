import React from 'react';
import { observer } from 'mobx-react';
import { Segment } from 'semantic-ui-react';
import numeral from 'numeral';
import styles from './ExchangeRate.css';

const formatRate = amount => numeral(amount).format('0.00000');

const ExchangeRate = ({ fromCurrency, toCurrency, rate, pending }) => (
  <Segment className={styles.container}>
    <p>For <b>1</b> {fromCurrency.name} you can have <b>{formatRate(rate)}</b> {toCurrency.name}</p>
  </Segment>
);

// So every component needs to be wrapper in an observer function: I wonder if we couldn't automatise that using babel or something.
export default observer(ExchangeRate);