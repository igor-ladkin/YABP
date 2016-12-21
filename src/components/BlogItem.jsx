import React, { DOM } from 'react';
import { Image, TextBox } from './common';

const BlogItem = ({ image, text }) => {
  return DOM.li(
    null,
    React.createElement(Image, image),
    React.createElement(TextBox, null, text),
  );
};

export default BlogItem;
