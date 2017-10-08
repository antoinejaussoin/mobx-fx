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

export default observer(ExchangeRate);