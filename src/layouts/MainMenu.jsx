import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

import { Link } from 'components/common';

import history from 'helpers/history';
import { aboutPath, rootPath } from 'helpers/routes';

const MainMenu = () => {
  const handleGoBackClick = () => history.goBack();
  const handleGoForwardClick = () => history.goForward();

  return (
    <Menu fixed="top" inverted className="main">
      <Menu.Item
        id="main-menu-logo"
        color="red"
        header
        active
        as={Link}
        to={rootPath()}
        content="Yet Another Blogging Platform"
      />
      <Menu.Item
        as={Link}
        to={aboutPath()}
        content="About"
        activeClassName="active"
      />

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
