import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ER from './rates/components/ExchangeRate'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

const Component = () => (
  <div>hello</div>
)