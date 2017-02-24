import React, { Component } from 'react';
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
      blogItems: [],
      showChart: true,
      showSearch: true,
    };

    this.handleItemUpdate = this.handleItemUpdate.bind(this);
    this.handleChartClose = this.handleChartClose.bind(this);
    this.handleSearchToggle = this.handleSearchToggle.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  sortItems(items) {
    return sortBy(items, ({ id }) => Number(id));
  }

  fetchPosts() {
    request.get(
      'http://localhost:3001',
      {},
      (err, res) => {
        const blogItems = this.sortItems(res.body);
        this.setState({ blogItems });
      },
    );
  }

  handleItemUpdate(itemId) {
    request.patch(
      `http://localhost:3001/posts/${itemId}/like`,
      {},
      (err, res) => {
        const updatedItem = res.body;
        const items = this.state.blogItems;
        const updatedItems = [...items.filter(item => item.id !== updatedItem.id), updatedItem];

        this.setState({
          blogItems: this.sortItems(updatedItems),
        });
      },
    );
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
    const { blogItems } = this.state;
    const activePage = this.fetchActivePage();

    const firstActiveItem = (activePage - 1) * POSTS_PER_PAGE;
    const lastActiveItem = firstActiveItem + POSTS_PER_PAGE;

    return blogItems.map(item => item.id).slice(firstActiveItem, lastActiveItem);
  }

  filterActivePagePosts() {
    const { blogItems } = this.state;
    const activeItemIds = this.fetchActiveItemIds();

    return blogItems.filter(item => activeItemIds.includes(item.id));
  }

  render() {
    const items = this.state.blogItems;
    const chartItems =
      chain(items)
        .filter(({ meta }) => Number(meta.likeCount) > 0)
        .map(({ title, meta }) => {
          const name = title.split('. ')[1].replace('.', '');
          return [name, Number(meta.likeCount)];
        }).value();

    return (
      <TwoColumnGrid>
        { items.length ?
          <BlogList
            items={this.filterActivePagePosts()}
            handleItemUpdate={this.handleItemUpdate}
          /> : <Loader /> }

        <div id="controls">
          { this.state.showSearch &&
            <Search items={items} handleSearchToggle={this.handleSearchToggle} /> }
          { this.state.showChart &&
            <PieChart items={chartItems} handleChartClose={this.handleChartClose} /> }
          <PaginationMenu
            itemIds={items.map(item => item.id)}
            itemsPerPage={POSTS_PER_PAGE}
            activePage={this.fetchActivePage()}
          />
        </div>
      </TwoColumnGrid>
    );
  }
}

export default Blog;
