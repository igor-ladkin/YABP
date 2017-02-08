import React, { Component, PropTypes as PT } from 'react';
import { Item } from 'semantic-ui-react';
import { MetaInfo } from './common';
import Like from './Like';

class BlogItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { id, image, title, text, meta, handleItemUpdate } = this.props;
    const { likeCount = 0 } = meta;

    handleItemUpdate({ id, image, title, text, meta: { ...meta, likeCount: likeCount + 1 } });
  }

  render() {
    const { image, title, text, meta } = this.props;

    return (
      <Item>
        <Item.Image size="small" {...image} />
        <Item.Content verticalAlign="bottom">
          <Item.Header as="a">{title}</Item.Header>
          <Item.Meta>
            <MetaInfo {...meta} />
          </Item.Meta>
          <Item.Description>{text}</Item.Description>
          <Item.Extra>
            <Like {...meta} handleClick={this.handleClick} />
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

BlogItem.propTypes = {
  id: PT.string.isRequired,
  image: PT.shape({
    src: PT.string.isRequired,
    alt: PT.string,
  }).isRequired,
  title: PT.string.isRequired,
  text: PT.string.isRequired,
  meta: PT.shape({
    ...MetaInfo.propTypes,
    likeCount: PT.number,
  }).isRequired,
  handleItemUpdate: PT.func.isRequired,
};

export default BlogItem;
