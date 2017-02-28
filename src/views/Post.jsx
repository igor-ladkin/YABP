import React from 'react';

import Post from 'containers/Post';
import OneColumnGrid from './layouts/OneColumnGrid';

const PostView = () => (
  <OneColumnGrid>
    <Post />
  </OneColumnGrid>
);

export default PostView;
