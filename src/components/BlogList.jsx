import React, { DOM, PropTypes as PT } from 'react';
import { map, pick } from 'lodash';

import BlogItem from './BlogItem';

const BlogList = ({ items, handleItemUpdate }) => DOM.ul(
  null,
  map(
    items,
    item => React.createElement(BlogItem, { ...item, key: item.id, handleItemUpdate }),
  ),
);

BlogList.propTypes = {
  items: PT.arrayOf(PT.shape(
    pick(BlogItem.propTypes, ['id', 'image', 'text', 'meta']),
  )),
  handleItemUpdate: PT.func.isRequired,
};

export default BlogList;
