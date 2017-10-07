import React from 'react';
import { observer } from 'mobx-react';
import { Dropdown as BaseDropdown } from 'semantic-ui-react';

const Dropdown = ({ placeholder, options, value, onChange }) => (
  <BaseDropdown
    placeholder={placeholder}
    fluid
    onChange={(e, data) => {
      onChange(data.value);
    }}
    options={options}
    value={value} />
);

export default observer(Dropdown);