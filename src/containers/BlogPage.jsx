import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';

import blogItems from '../constants/posts';

import BlogList from '../components/BlogList';
import PieChart from '../components/PieChart';

class BlogPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogItems: _.sortBy(blogItems, ({ meta }) => moment(meta.updatedAt)).reverse(),
      showChart: true,
    };

    this.handleItemUpdate = this.handleItemUpdate.bind(this);
    this.handleChartClose = this.handleChartClose.bind(this);
  }

  handleItemUpdate(updatedItem) {
    const items = this.state.blogItems;
    const updatedItems = [...items.filter(item => item.id !== updatedItem.id), updatedItem];

    this.setState({
      blogItems: _.sortBy(updatedItems, ({ meta }) => moment(meta.updatedAt)).reverse(),
    });
  }

  handleChartClose() {
    this.setState({
      showChart: !this.state.showChart,
    });
  }

  render() {
    const items = this.state.blogItems;
    const chartItems =
      _.chain(items)
       .filter(({ meta }) => Number(meta.likeCount) > 0)
       .map(({ text, meta }) => [text, Number(meta.likeCount)])
       .value();

    return (
      <div>
        <BlogList
          items={items}
          handleItemUpdate={this.handleItemUpdate}
        />
        { this.state.showChart &&
          <PieChart items={chartItems} handleChartClose={this.handleChartClose} /> }
      </div>
    );
  }
}

export default BlogPage;
