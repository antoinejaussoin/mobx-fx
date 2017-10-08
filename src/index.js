import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import 'isomorphic-fetch';

store.initialise();

ReactDOM.render(
  <App />
, document.getElementById('root'));
registerServiceWorker();
