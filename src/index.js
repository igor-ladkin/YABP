import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'semantic-ui-css/semantic.min.css';

import App from './App';
import './index.css';
import './c3.min.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootElement,
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default; // eslint-disable-line

    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootElement,
    );
  });
}
