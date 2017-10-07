import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {Input} from 'semantic-ui-react'
import ExchangeRate from './rates';

@observer
class App extends Component {
  render() {
    const { number1, number2, total, setNumber1, setNumber2 } = this.props.store;
    return (
      <div className="App">
        <Input type="number" value={number1} onChange={(e) => setNumber1(+e.target.value)} />
        <Input type="number" value={number2} onChange={(e) => setNumber2(+e.target.value)} />
        <br />
        <h1>{total}</h1>
        
        <ExchangeRate />        
      </div>
    );
  }
}

export default App;
