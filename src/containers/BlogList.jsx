import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import request from 'superagent';

import BlogList from 'components/BlogList';
import Loader from 'components/Loader';

class BlogListContainer extends Component {
  constructor(props) {
    super(props);

    this.handleItemUpdate = this.handleItemUpdate.bind(this);
  }

  handleItemUpdate(itemId) {
    request.patch(
      `http://localhost:3001/posts/${itemId}/like`,
      {},
      (err, res) => {
        const updatedItem = res.body;
        const { items } = this.props;
        const updatedItems = [...items.filter(item => item.id !== updatedItem.id), updatedItem];

        console.log('Like success');
      },
    );
  }

  render() {
    const { items, isFetching } = this.props;

    return (
      <div>
        { isFetching && <Loader /> }
        { items.length !== 0 &&
          <BlogList
            items={items}
            handleItemUpdate={this.handleItemUpdate}
          /> }
      </div>
    );
  }
}

BlogListContainer.propTypes = {
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const stateToProps = (state) => {
  const { items, isFetching } = state.posts;
  return { items, isFetching };
};

export default connect(stateToProps)(BlogListContainer);
