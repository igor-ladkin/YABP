import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { sortBy, chain } from 'lodash';
import request from 'superagent';

import BlogList from 'components/BlogList';
import PieChart from 'components/PieChart';
import Search from 'components/Search';
import Loader from 'components/Loader';
import PaginationMenu from 'components/PaginationMenu';

import TwoColumnGrid from 'views/layouts/TwoColumnGrid';

import history from 'helpers/history';

import { POSTS_PER_PAGE } from 'constants';

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showChart: true,
      showSearch: true,
    };

    this.handleItemUpdate = this.handleItemUpdate.bind(this);
    this.handleChartClose = this.handleChartClose.bind(this);
    this.handleSearchToggle = this.handleSearchToggle.bind(this);
  }

  sortItems(items) {
    return sortBy(items, ({ id }) => Number(id));
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

  handlePageSelect(activePage) {
    const path = activePage === 1 ? '/' : `/?page=${activePage}`;
    history.push(path);
  }


  handleChartClose() {
    this.setState({ showChart: !this.state.showChart });
  }

  handleSearchToggle() {
    this.setState({ showSearch: !this.state.showSearch });
  }

  fetchActivePage() {
    const { page } = this.props.location.query;
    return Number(page) || 1;
  }

  fetchActiveItemIds() {
    const { items } = this.props;
    const activePage = this.fetchActivePage();

    const firstActiveItem = (activePage - 1) * POSTS_PER_PAGE;
    const lastActiveItem = firstActiveItem + POSTS_PER_PAGE;

    return items.map(item => item.id).slice(firstActiveItem, lastActiveItem);
  }

  filterActivePagePosts() {
    const { items } = this.props;
    const activeItemIds = this.fetchActiveItemIds();

    return items.filter(item => activeItemIds.includes(item.id));
  }

  render() {
    const { items, isFetching } = this.props;
    const chartItems =
      chain(items)
        .filter(({ meta }) => Number(meta.likeCount) > 0)
        .map(({ title, meta }) => {
          const name = title.split('. ')[1].replace('.', '');
          return [name, Number(meta.likeCount)];
        }).value();

    return (
      <TwoColumnGrid>
        <div>
          { isFetching && <Loader /> }
          { items.length &&
            <BlogList
              items={this.filterActivePagePosts()}
              handleItemUpdate={this.handleItemUpdate}
            /> }
        </div>

        <div id="controls">
          { this.state.showSearch &&
            <Search items={items} handleSearchToggle={this.handleSearchToggle} /> }
          { this.state.showChart &&
            <PieChart items={chartItems} handleChartClose={this.handleChartClose} /> }
          <PaginationMenu
            itemIds={items.map(item => item.id)}
            itemsPerPage={POSTS_PER_PAGE}
            activePage={this.fetchActivePage()}
            handlePageSelect={this.handlePageSelect}
          />
        </div>
      </TwoColumnGrid>
    );
  }
}

Blog.propTypes = {
  items: BlogList.propTypes.items,
  isFetching: PropTypes.bool.isRequired,
};

const stateToProps = (state) => {
  const { items, isFetching, error } = state.posts;
  return { items, isFetching, error };
};

export default connect(stateToProps)(Blog);
