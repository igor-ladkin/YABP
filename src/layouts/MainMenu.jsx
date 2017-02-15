import React from 'react';
import { Menu } from 'semantic-ui-react';

import { Link } from 'components/common';

const MainMenu = () => (
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
  </Menu>
);

export default MainMenu;
