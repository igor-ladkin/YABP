import React, { Component } from 'react';

import blogItems from '../constants/posts';

import BlogList from '../components/BlogList';

class BlogPage extends Component {
  constructor(props) {
    super(props);

    this.state = { blogItems };
  }

  render() {
    const items = this.state.blogItems;
    return React.createElement(BlogList, { items });
  }
}

export default BlogPage;
