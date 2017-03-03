import React, { PropTypes } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { ceil } from 'lodash';

const PaginationMenu = (props) => {
  const { itemsCount, itemsPerPage, activePage, handlePageSelect } = props;
  const pageNumbers = [...Array(ceil(itemsCount / itemsPerPage)).keys()];

  const renderMenuItems = () => (
    pageNumbers.map(i => (
      <Menu.Item
        key={`page-${i}`}
        name={`${i + 1}`}
        active={activePage === i + 1}
        onClick={() => { handlePageSelect(i + 1); }}
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
};

PaginationMenu.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  handlePageSelect: PropTypes.func.isRequired,
};

export default PaginationMenu;
