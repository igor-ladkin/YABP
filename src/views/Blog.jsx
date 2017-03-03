import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import BlogList from 'containers/BlogList';
import PieChart from 'containers/PieChart';
import Search from 'components/Search';
import PaginationMenu from 'components/PaginationMenu';

import TwoColumnGrid from 'views/layouts/TwoColumnGrid';

import history from 'helpers/history';

import { POSTS_PER_PAGE } from 'constants';

class BlogView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showChart: true,
      showSearch: true,
    };

    this.handleChartClose = this.handleChartClose.bind(this);
    this.handleSearchToggle = this.handleSearchToggle.bind(this);
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

  render() {
    const { items } = this.props;

    return (
      <TwoColumnGrid>
        <BlogList activePage={this.fetchActivePage()} itemsPerPage={POSTS_PER_PAGE} />

        <div id="controls">
          { this.state.showSearch &&
            <Search items={items} handleSearchToggle={this.handleSearchToggle} /> }
          { this.state.showChart &&
            <PieChart handleChartClose={this.handleChartClose} /> }
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

BlogView.propTypes = {
  items: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};

const stateToProps = (state) => {
  const { items } = state.posts;
  return { items };
};

export default connect(stateToProps)(BlogView);
