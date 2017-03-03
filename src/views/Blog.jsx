import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import BlogList from 'containers/BlogList';
import PieChart from 'containers/PieChart';
import Search from 'components/Search';
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
    const { items, location } = this.props;

    return (
      <TwoColumnGrid>
        <BlogList />

        <div id="controls">
          { this.state.showSearch &&
            <Search items={items} handleSearchToggle={this.handleSearchToggle} /> }
          { this.state.showChart &&
            <PieChart handleChartClose={this.handleChartClose} /> }
          <PaginationMenu location={location} />
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
  const { posts: { items }, stats } = state;
  return { items, stats };
};

export default connect(stateToProps)(BlogView);
