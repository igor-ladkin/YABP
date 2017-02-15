import React from 'react';
import { Menu } from 'semantic-ui-react';

const MainMenu = () => (
  <Menu fixed="top" inverted>
    <Menu.Item
      id="main-menu-logo"
      color="red"
      header
      active
    >
      Yet Another Blogging Platform
    </Menu.Item>
  </Menu>
);

export default MainMenu;
