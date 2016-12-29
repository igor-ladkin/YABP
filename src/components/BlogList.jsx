import React, { DOM, PropTypes as PT } from 'react';
import _ from 'lodash';

import BlogItem from './BlogItem';

const BlogList = ({ items }) => {
  return DOM.ul(
    null,
    _.map(items, item => React.createElement(BlogItem, { ...item, key: item.id })),
  );
};

BlogList.propTypes = {
  items: PT.arrayOf(PT.shape(BlogItem.propTypes)),
};

export default BlogList;
