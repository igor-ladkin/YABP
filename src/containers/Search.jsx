import { connect } from 'react-redux';

import Search from 'components/Search';
import { search, changeSearchTerm } from 'actions/Search';

const stateToProps = (state) => {
  const { isLoading, results } = state.search;
  return { isLoading, results };
};

export default connect(stateToProps, { search })(Search);
