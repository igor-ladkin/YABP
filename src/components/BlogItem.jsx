import React, { DOM, PropTypes as PT } from 'react';
import { Image, TextBox } from './common';

const BlogItem = ({ image, text }) => {
  return DOM.li(
    null,
    React.createElement(Image, image),
    React.createElement(TextBox, null, text),
  );
};

BlogItem.propTypes = {
  image: PT.shape(Image.propTypes),
  text: PT.string.isRequired,
};

export default BlogItem;
