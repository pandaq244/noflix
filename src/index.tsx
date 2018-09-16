import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    Provider
} from 'react-redux';

import {
    BrowserRouter
} from 'react-router-dom';


import App from './components/';

import store from './store/';

import './icons/';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
