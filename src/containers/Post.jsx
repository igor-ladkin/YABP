import { connect } from 'react-redux';

import Post from 'components/Post';

const stateToProps = (state) => {
  const { item, isFetching } = state.post;
  return { item, isFetching };
};

export default connect(stateToProps)(Post);
