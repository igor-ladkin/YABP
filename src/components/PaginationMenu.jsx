import React, { Component, PropTypes } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { chunk } from 'lodash';

import { POSTS_PER_PAGE } from 'constants';

class PaginationMenu extends Component {
  splitIntoPages() {
    const { itemIds } = this.props;
    return chunk(itemIds, POSTS_PER_PAGE);
  }

  selectActiveItems() {
    const { activePage } = this.props;
    return this.splitIntoPages()[activePage - 1] || [];
  }

  render() {
    const { activePage, handlePageSelect } = this.props;
    const pages = this.splitIntoPages();
    const pageItemIds = i => pages[i] || [];

    const renderMenuItems = () => (
      pages.map((page, i) => (
        <Menu.Item
          key={`page-${i}`}
          name={`${i + 1}`}
          active={activePage === i + 1}
          onClick={() => { handlePageSelect(i + 1, pageItemIds(i)); }}
        />
      ))
    );

    return (
      <Segment className="aside">
        <Menu pagination borderless fluid>
          {renderMenuItems()}
        </Menu>
      </Segment>
    );
  }
}

PaginationMenu.propTypes = {
  itemIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  activePage: PropTypes.number.isRequired,
  handlePageSelect: PropTypes.func.isRequired,
};

export default PaginationMenu;
