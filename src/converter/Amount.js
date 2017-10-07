import React from 'react';
import { Input } from 'semantic-ui-react';

export default ({ amount, currency, onChange }) => (
  <Input
    type="number"
    label={{ tag: false, content: currency }}
    labelPosition='left'
    value={amount}
    onChange={(e) => {
      onChange(e.target.value);
    }}
  />
);
