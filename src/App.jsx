import React from 'react';

import MainMenu from './components/MainMenu';
import BlogPage from './containers/BlogPage';

const App = () => React.createElement(
  'div',
  {},
  React.createElement(MainMenu),
  React.createElement(BlogPage),
);

export default App;
