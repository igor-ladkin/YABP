import React, { Component, PropTypes } from 'react';
import request from 'superagent';

import Article from 'components/Article';
import Loader from 'components/Loader';

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

    return item ? <Article {...item} /> : <Loader />;
  }
}

Post.propTypes = {
  params: PropTypes.object,
};

export default Post;
