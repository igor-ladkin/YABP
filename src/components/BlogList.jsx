import React, { DOM } from 'react';
import _ from 'lodash';

import BlogItem from './BlogItem';

const BlogList = ({ items }) => {
  return DOM.ul(
    null,
    _.map(items, item => React.createElement(BlogItem, { ...item, key: item.id })),
  );
};

export default BlogList;
