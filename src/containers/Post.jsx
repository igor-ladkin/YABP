import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Post from 'components/Post';
import Loader from 'components/Loader';

const PostContainer = ({ item, isFetching }) => (
  <div>
    { isFetching && <Loader /> }
    { item !== null && <Post {...item} /> }
  </div>
);

PostContainer.propTypes = {
  item: PropTypes.shape(Post.propTypes),
  isFetching: PropTypes.bool.isRequired,
};

const stateToProps = (state) => {
  const { item, isFetching } = state.post;
  return { item, isFetching };
};

export default connect(stateToProps)(PostContainer);
