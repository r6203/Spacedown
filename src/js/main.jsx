import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './app/Root';
import configureStore from './app/configureStore';

const rootEl = document.getElementById('root');
const store = configureStore();

ReactDOM.render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./app/Root', () => {
    const NextRoot = require('./app/Root').default;
    ReactDOM.render(<AppContainer><NextRoot store={store} /></AppContainer>, rootEl);
  });
}
