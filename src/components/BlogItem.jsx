import React, { Component, PropTypes } from 'react';
import { Item } from 'semantic-ui-react';
import { postPath } from 'helpers/routes';

import { MetaInfo, Link } from './common';
import Like from './Like';

class BlogItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { id, image, title, note, meta, handleItemUpdate } = this.props;
    const { likeCount = 0 } = meta;

    handleItemUpdate({ id, image, title, note, meta: { ...meta, likeCount: likeCount + 1 } });
  }

  render() {
    const { id, image, title, note, meta } = this.props;

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
          <Item.Description>{note}</Item.Description>
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
  note: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    ...MetaInfo.propTypes,
    likeCount: PropTypes.number,
  }).isRequired,
  handleItemUpdate: PropTypes.func.isRequired,
};

export default BlogItem;
