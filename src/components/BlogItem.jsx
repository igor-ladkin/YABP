import React, { PropTypes as PT } from 'react';
import { Image, TextBox, MetaInfo } from './common';

const BlogItem = ({ image, text, meta }) => {
  return (
    <li>
      <Image {...image} />
      <TextBox>{text}</TextBox>
      <MetaInfo {...meta} />
    </li>
  );
};

BlogItem.propTypes = {
  image: PT.shape(Image.propTypes),
  text: PT.string.isRequired,
  meta: PT.shape(MetaInfo.propTypes),
};

export default BlogItem;
