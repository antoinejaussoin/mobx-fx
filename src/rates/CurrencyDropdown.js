import React from 'react';
import { observer } from 'mobx-react';
import Dropdown from '../components/Dropdown';

const CurrencyDropdown = ({ currencies, value, onChange }) => (
  <Dropdown
    placeholder="Choose currency"
    fluid
    onChange={onChange}
    options={currencies}
    value={value} />
);

export default observer(CurrencyDropdown);