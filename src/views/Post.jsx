import React, { Component, PropTypes } from 'react';
import request from 'superagent';

import Article from 'components/Article';
import Loader from 'components/Loader';
import OneColumnGrid from './layouts/OneColumnGrid';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogItem: null,
    };
  }

  componentDidMount() {
    this.fetchPost();
  }

  fetchPost() {
    const { params } = this.props;

    request.get(
      `http://localhost:3001/posts/${params.id}`,
      {},
      (err, res) => this.setState({ blogItem: res.body }),
    );
  }

  render() {
    const item = this.state.blogItem;

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
