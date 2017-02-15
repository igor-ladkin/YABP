import React from 'react';

import MainLayout from './layouts/MainLayout';
import BlogPage from './containers/BlogPage';

const App = () => React.createElement(
  MainLayout,
  {},
  React.createElement(BlogPage),
);

export default App;
