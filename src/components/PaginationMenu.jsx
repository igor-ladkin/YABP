import React, { Component, PropTypes } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { chunk } from 'lodash';
import history from 'helpers/history';

class PaginationMenu extends Component {
  splitIntoPages() {
    const { itemIds, itemsPerPage } = this.props;
    return chunk(itemIds, itemsPerPage);
  }

  selectActiveItems() {
    const { activePage } = this.props;
    return this.splitIntoPages()[activePage - 1] || [];
  }

  render() {
    const { activePage } = this.props;
    const pages = this.splitIntoPages();

    const renderMenuItems = () => (
      pages.map((page, i) => (
        <Menu.Item
          key={`page-${i}`}
          name={`${i + 1}`}
          active={activePage === i + 1}
          onClick={() => {
            const path = i === 0 ? '/' : `/?page=${i + 1}`;
            history.push(path);
          }}
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
  itemsPerPage: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
};

export default PaginationMenu;
