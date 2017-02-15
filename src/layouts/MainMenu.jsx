import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

import { Link } from 'components/common';

import history from 'helpers/history';

const MainMenu = () => {
  const handleGoBackClick = () => history.goBack();
  const handleGoForwardClick = () => history.goForward();

  return (
    <Menu fixed="top" inverted>
      <Link to="/">
        <Menu.Item
          id="main-menu-logo"
          color="red"
          header
          active
        >
          Yet Another Blogging Platform
        </Menu.Item>
      </Link>

      <Menu.Menu position="right">
        <Menu.Item onClick={handleGoBackClick} >
          <Icon name="arrow left" />
        </Menu.Item>

        <Menu.Item onClick={handleGoForwardClick} >
          <Icon name="arrow right" />
        </Menu.Item>
      </Menu.Menu >
    </Menu>
  );
};

export default MainMenu;
