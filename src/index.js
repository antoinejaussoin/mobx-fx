import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import 'isomorphic-fetch';

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
