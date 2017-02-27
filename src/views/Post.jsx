import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Article from 'components/Article';
import Loader from 'components/Loader';
import OneColumnGrid from './layouts/OneColumnGrid';

const Post = ({ item, isFetching }) => (
  <OneColumnGrid>
    { isFetching && <Loader /> }
    { item !== null && <Article {...item} /> }
  </OneColumnGrid>
);

Post.propTypes = {
  item: PropTypes.shape(Article.propTypes),
  isFetching: PropTypes.bool.isRequired,
};

const stateToProps = (state) => {
  const { item, isFetching } = state.post;
  return { item, isFetching };
};

export default connect(stateToProps)(Post);
