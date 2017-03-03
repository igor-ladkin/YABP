import { connect } from 'react-redux';

import BlogList from 'components/BlogList';

const stateToProps = (state, ownProps) => {
  const { items, isFetching } = state.posts;
  const { handleItemUpdate } = ownProps;
  return { items, isFetching, handleItemUpdate };
};

export default connect(stateToProps)(BlogList);
