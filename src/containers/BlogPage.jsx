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
    };

    this.handleItemUpdate = this.handleItemUpdate.bind(this);
  }

  handleItemUpdate(updatedItem) {
    const items = this.state.blogItems;
    const updatedItems = [...items.filter(item => item.id !== updatedItem.id), updatedItem];

    this.setState({
      blogItems: _.sortBy(updatedItems, ({ meta }) => moment(meta.updatedAt)).reverse(),
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
        <PieChart items={chartItems} />
      </div>
    );
  }
}

export default BlogPage;
