import React, { Component, PropTypes } from 'react';
import { Search as SemanticSearch, Input } from 'semantic-ui-react';
import { debounce } from 'lodash';

import AsideControl from 'layouts/AsideControl';

class Search extends Component {
  constructor(props) {
    super(props);

    this.processSearch = debounce(props.processSearch, 400);

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  componentWillUnmount() {
    this.props.processTermChange('');
  }

  handleFocus() {
    this.props.processTermChange('');
  }

  handleSearchChange(e, value) {
    this.props.processTermChange(value);
    this.processSearch(value);
  }

  render() {
    const {
      isLoading,
      results,
      value,
      handleSearchToggle,
      handleResultSelect,
    } = this.props;

    return (
      <AsideControl handleClose={handleSearchToggle}>
        <SemanticSearch
          fluid
          input={<Input fluid />}
          minCharacters={3}
          loading={isLoading}
          onResultSelect={handleResultSelect}
          onSearchChange={this.handleSearchChange}
          onFocus={this.handleFocus}
          results={results}
          value={value}
        />
      </AsideControl>
    );
  }
}

Search.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  results: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  processSearch: PropTypes.func.isRequired,
  processTermChange: PropTypes.func.isRequired,
  handleSearchToggle: PropTypes.func.isRequired,
  handleResultSelect: PropTypes.func.isRequired,
};

export default Search;
