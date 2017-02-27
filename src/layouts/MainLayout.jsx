import React, { PropTypes } from 'react';
import { Container } from 'semantic-ui-react';

import MainMenu from './MainMenu';
import MainFooter from './MainFooter';

const MainLayout = ({ children }) => (
  <Container fluid>
    <MainMenu />
    {children}
    <MainFooter />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
