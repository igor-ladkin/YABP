import React from 'react';
import { Router } from 'react-router';

import history from 'helpers/history';

import routes from 'routes';

const App = () => (
  <Router history={history} routes={routes} />
);

export default App;
