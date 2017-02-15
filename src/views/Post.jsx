import React, { PropTypes } from 'react';
import { Item } from 'semantic-ui-react';

import posts from 'constants/posts';

import BlogItem from 'components/BlogItem';

const Post = ({ params }) => {
  const post = posts.find(p => p.id === params.id);

  return (
    <Item.Group>
      <BlogItem {...post} />
    </Item.Group>
  );
};

Post.propTypes = {
  params: PropTypes.object,
};

export default Post;
