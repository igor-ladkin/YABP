import React, { PropTypes } from 'react';
import { Segment, Item } from 'semantic-ui-react';
import { isNil } from 'lodash';

import Loader from './Loader';

const Post = ({ item, isFetching }) => (
  <Segment className="main">
    { isFetching && <Loader /> }
    { !isNil(item) &&
      <Item>
        <Item.Image {...item.image} size="large" floated="right" />
        <Item.Header as="h1">{item.title}</Item.Header>
        <Item.Description>
          <div dangerouslySetInnerHTML={{ __html: item.description }} />
        </Item.Description>
      </Item> }
  </Segment>
);

Post.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  isFetching: PropTypes.bool,
};

Post.defaultProps = {
  item: null,
  isFetching: false,
};

export default Post;
