import React, { Component, PropTypes } from 'react';

import Helmet from 'react-helmet';

import BlogList from 'containers/BlogList';
import PieChart from 'containers/PieChart';
import Search from 'containers/Search';
import PaginationMenu from 'containers/PaginationMenu';

import TwoColumnGrid from 'views/layouts/TwoColumnGrid';

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

  handleChartClose() {
    this.setState({ showChart: !this.state.showChart });
  }

  handleSearchToggle() {
    this.setState({ showSearch: !this.state.showSearch });
  }

  render() {
    const { location } = this.props;

    return (
      <div>
        <TwoColumnGrid>
          <BlogList />

          <div id="controls">
            { this.state.showSearch &&
              <Search handleSearchToggle={this.handleSearchToggle} /> }
            { this.state.showChart &&
              <PieChart handleChartClose={this.handleChartClose} /> }
            { <PaginationMenu location={location} /> }
          </div>
        </TwoColumnGrid>

        <Helmet title="Blog about superheroes and more" />
      </div>
    );
  }
}

BlogView.propTypes = {
  location: PropTypes.object.isRequired,
};

export default BlogView;
