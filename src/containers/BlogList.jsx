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

  fetchActiveItemIds() {
    const { items, itemsPerPage, activePage } = this.props;
    const firstActiveItem = (activePage - 1) * itemsPerPage;
    const lastActiveItem = firstActiveItem + itemsPerPage;

    return items.map(item => item.id).slice(firstActiveItem, lastActiveItem);
  }

  filterActivePagePosts() {
    const { items } = this.props;
    const activeItemIds = this.fetchActiveItemIds();

    return items.filter(item => activeItemIds.includes(item.id));
  }

  render() {
    const { items, isFetching } = this.props;

    return (
      <div>
        { isFetching && <Loader /> }
        { items.length !== 0 &&
          <BlogList
            items={this.filterActivePagePosts()}
            handleItemUpdate={this.handleItemUpdate}
          /> }
      </div>
    );
  }
}

BlogListContainer.propTypes = {
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  activePage: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
};

const stateToProps = (state) => {
  const { items, isFetching } = state.posts;
  return { items, isFetching };
};

export default connect(stateToProps)(BlogListContainer);
