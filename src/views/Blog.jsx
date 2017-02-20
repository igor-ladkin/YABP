import React, { Component } from 'react';
import { sortBy, chain } from 'lodash';
import moment from 'moment';
import request from 'superagent';

import BlogList from 'components/BlogList';
import PieChart from 'components/PieChart';
import Search from 'components/Search';
import Loader from 'components/Loader';

import TwoColumnGrid from 'views/layouts/TwoColumnGrid';

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

  sortBlogItems(blogItems) {
    this.setState({
      blogItems: sortBy(blogItems, ({ meta }) => moment(meta.updatedAt)).reverse(),
    });
  }

  fetchPosts() {
    request.get(
      'http://localhost:3001',
      {},
      (err, res) => this.sortBlogItems(res.body),
    );
  }

  handleItemUpdate(updatedItem) {
    const items = this.state.blogItems;
    const updatedItems = [...items.filter(item => item.id !== updatedItem.id), updatedItem];

    this.sortBlogItems(updatedItems);
  }

  handleChartClose() {
    this.setState({ showChart: !this.state.showChart });
  }

  handleSearchToggle() {
    this.setState({ showSearch: !this.state.showSearch });
  }

  render() {
    const items = this.state.blogItems;
    const chartItems =
      chain(items)
        .filter(({ meta }) => Number(meta.likeCount) > 0)
        .map(({ title, meta }) => [title, Number(meta.likeCount)])
        .value();

    return (
      <TwoColumnGrid>
        { items.length ?
          <BlogList items={items} handleItemUpdate={this.handleItemUpdate} /> :
          <Loader /> }

        <div>
          { this.state.showSearch &&
            <Search items={items} handleSearchToggle={this.handleSearchToggle} /> }
          { this.state.showChart &&
            <PieChart items={chartItems} handleChartClose={this.handleChartClose} /> }
        </div>
      </TwoColumnGrid>
    );
  }
}

export default Blog;
