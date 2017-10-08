import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import ExchangeRate from './rates';
import Converter from './converter';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Container>
          <Segment>
            <ExchangeRate />
          </Segment>
          <Segment>
            <Converter />
          </Segment>
        </Container>
      </div>
    );
  }
}

export default App;
