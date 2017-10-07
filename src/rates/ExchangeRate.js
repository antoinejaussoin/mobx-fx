import React from 'react';
import { observer } from 'mobx-react';
import { Card } from 'semantic-ui-react'

const ExchangeRate = ({ rate, pending }) => (
  <Card>
    <Card.Content>
      <Card.Header>
        Exchange Rate
      </Card.Header>
      <Card.Description>
        {pending ? '...loading...' : rate}
      </Card.Description>
    </Card.Content>
  </Card>
);

export default observer(ExchangeRate);