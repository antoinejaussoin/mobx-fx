import React from 'react';
import classNames from 'classnames';
import { Input, Label } from 'semantic-ui-react';
import styles from './Amount.css';

export default ({ amount, currency, highlighted, onChange }) => (
  <Input
    className={classNames(styles.container, { [styles.highlighted]: highlighted })}
    labelPosition="right"
    value={amount}
    onChange={(e) => {
      onChange(e.target.value);
    }}
  >
    <Label basic>{currency.symbol}</Label>
    <input />
    <Label>{currency.iso}</Label>
  </Input>
);
