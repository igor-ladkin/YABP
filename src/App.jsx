import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

import history from 'helpers/history';

import routes from 'routes';
import store from 'store';


const App = () => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
);

export default App;
