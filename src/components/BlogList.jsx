import React, { PropTypes } from 'react';
import { map, pick } from 'lodash';
import { Segment, Item } from 'semantic-ui-react';

import BlogItem from './BlogItem';

const BlogList = ({ items, handleItemUpdate }) => (
  <Segment className="main">
    <Item.Group divided>
      {map(items, item => <BlogItem key={item.id} handleItemUpdate={handleItemUpdate} {...item} />)}
    </Item.Group>
  </Segment>
);

BlogList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(
    pick(BlogItem.propTypes, ['id', 'image', 'title', 'note', 'meta']),
  )).isRequired,
  handleItemUpdate: PropTypes.func.isRequired,
};

export default BlogList;
