import React, { Component, PropTypes } from 'react';
import request from 'superagent';

import Article from 'components/Article';
import Loader from 'components/Loader';
import OneColumnGrid from './layouts/OneColumnGrid';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogItems: [],
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      'http://localhost:3001',
      {},
      (err, res) => this.setState({ blogItems: res.body }),
    );
  }

  render() {
    const { params } = this.props;
    const item = this.state.blogItems.find(i => i.id === params.id);

    return (
      <OneColumnGrid>
        {item ? <Article {...item} /> : <Loader />}
      </OneColumnGrid>
    );
  }
}

Post.propTypes = {
  params: PropTypes.object,
};

export default Post;
