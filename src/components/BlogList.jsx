import React, { PropTypes as PT } from 'react';
import { map, pick } from 'lodash';
import { Segment, Item } from 'semantic-ui-react';

import BlogItem from './BlogItem';

const BlogList = ({ items, handleItemUpdate }) => (
  <Segment>
    <Item.Group divided>
      {map(items, item => <BlogItem key={item.id} handleItemUpdate={handleItemUpdate} {...item} />)}
    </Item.Group>
  </Segment>
);

BlogList.propTypes = {
  items: PT.arrayOf(PT.shape(
    pick(BlogItem.propTypes, ['id', 'image', 'title', 'text', 'meta']),
  )).isRequired,
  handleItemUpdate: PT.func.isRequired,
};

export default BlogList;
