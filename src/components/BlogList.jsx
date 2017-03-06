import React, { PropTypes } from 'react';
import { map, pick, isEmpty } from 'lodash';
import { Segment, Item } from 'semantic-ui-react';

import BlogItem from './BlogItem';
import Loader from './Loader';

const BlogList = ({ items, handlePostLike, isFetching }) => (
  <Segment className="main">
    { isFetching && <Loader /> }
    { !isEmpty(items) &&
      <Item.Group divided>
        { map(items,
            item => <BlogItem key={item.id} handlePostLike={handlePostLike} {...item} />) }
      </Item.Group> }
  </Segment>
);

BlogList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(
    pick(BlogItem.propTypes, ['id', 'image', 'title', 'note', 'meta']),
  )).isRequired,
  handlePostLike: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
};

BlogList.defaultProps = {
  isFetching: false,
};

export default BlogList;
