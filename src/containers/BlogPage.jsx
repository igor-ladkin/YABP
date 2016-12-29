import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';

import blogItems from '../constants/posts';

import BlogList from '../components/BlogList';

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
    const handleItemUpdate = this.handleItemUpdate;

    return React.createElement(BlogList, { items, handleItemUpdate });
  }
}

export default BlogPage;
