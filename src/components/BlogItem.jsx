import React, { Component, PropTypes } from 'react';
import { Item } from 'semantic-ui-react';
import { MetaInfo, Link } from './common';
import Like from './Like';

import { postPath } from 'helpers/routes';

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
    const { id, image, title, text, meta } = this.props;

    return (
      <Item>
        <Item.Image size="small" {...image} />
        <Item.Content verticalAlign="bottom">
          <Item.Header as={Link} to={postPath(id)}>
            {title}
          </Item.Header>
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
  id: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    ...MetaInfo.propTypes,
    likeCount: PropTypes.number,
  }).isRequired,
  handleItemUpdate: PropTypes.func.isRequired,
};

export default BlogItem;
