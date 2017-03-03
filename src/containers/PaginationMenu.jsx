import { connect } from 'react-redux';

import PaginationMenu from 'components/PaginationMenu';
import { POSTS_PER_PAGE } from 'constants';

import history from 'helpers/history';

function fetchActivePage(props) {
  const { page } = props.location.query;
  return Number(page) || 1;
}

function handlePageSelect(activePage) {
  const path = activePage === 1 ? '/' : `/?page=${activePage}`;
  history.push(path);
}

const stateToProps = (state, ownProps) => {
  const itemsCount = state.stats.count;

  return {
    itemsCount,
    activePage: fetchActivePage(ownProps),
    itemsPerPage: POSTS_PER_PAGE,
    handlePageSelect,
  };
};

export default connect(stateToProps)(PaginationMenu);
