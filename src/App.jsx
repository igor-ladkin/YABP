import React from 'react';
import { Router, match } from 'react-router';
import { Provider } from 'react-redux';

import history from 'helpers/history';
import prepareData from 'helpers/prepareData';

import routes from 'routes';
import store from 'store';

function historyCallback(location) {
  match({ location, routes }, (error, redirect, state) => {
    if (!error && !redirect) {
      prepareData(store, state);
    }
  });

  return true;
}

history.listenBefore(historyCallback);
historyCallback(window.location);

const App = () => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
);

export default App;
