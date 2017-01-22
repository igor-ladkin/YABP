import React, { Component, PropTypes as PT } from 'react';
import { Image, TextBox, MetaInfo } from './common';
import Like from './Like';

class BlogItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { id, image, text, meta, handleItemUpdate } = this.props;
    const { likeCount = 0 } = meta;

    handleItemUpdate({ id, image, text, meta: { ...meta, likeCount: likeCount + 1 } });
  }

  render() {
    const { image, text, meta } = this.props;

    return (
      <li>
        <Image {...image} />
        <TextBox>{text}</TextBox>
        <MetaInfo {...meta} />
        <Like {...meta} handleClick={this.handleClick} />
      </li>
    );
  }
}

BlogItem.propTypes = {
  id: PT.string.isRequired,
  image: PT.shape(Image.propTypes),
  text: PT.string.isRequired,
  meta: PT.shape({
    ...MetaInfo.propTypes,
    likeCount: PT.number,
  }),
  handleItemUpdate: PT.func.isRequired,
};

export default BlogItem;
