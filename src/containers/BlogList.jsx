import { connect } from 'react-redux';

import BlogList from 'components/BlogList';
import { createPostLike } from 'actions/Post';

const stateToProps = (state) => {
  const { items, isFetching } = state.posts;
  return { items, isFetching };
};

export default connect(stateToProps, { handlePostLike: createPostLike })(BlogList);
