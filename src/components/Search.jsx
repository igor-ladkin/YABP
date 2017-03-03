import React, { Component, PropTypes } from 'react';
import { Search as SemanticSearch, Input } from 'semantic-ui-react';

import history from 'helpers/history';
import { postPath } from 'helpers/routes';

import AsideControl from 'layouts/AsideControl';

class Search extends Component {
  constructor(props) {
    super(props);

    this.resetComponent = this.resetComponent.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);

    this.state = { value: '' };
  }

  resetComponent() {
    this.setState({ value: '' });
  }

  handleSearchChange(e, value) {
    const { search } = this.props;
    this.setState({ value });

    if (value.length >= 3) {
      search({ q: value });
    }
  }

  render() {
    const { value } = this.state;
    const { handleSearchToggle, isLoading, results } = this.props;

    return (
      <AsideControl handleClose={handleSearchToggle}>
        <SemanticSearch
          fluid
          input={<Input fluid />}
          minCharacters={3}
          loading={isLoading}
          onResultSelect={(e, result) => history.push(postPath(result.id))}
          onSearchChange={this.handleSearchChange}
          onFocus={this.resetComponent}
          results={results}
          value={value}
        />
      </AsideControl>
    );
  }
}

Search.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  handleSearchToggle: PropTypes.func.isRequired,
};

Search.defaultProps = {
  items: [],
};

export default Search;
