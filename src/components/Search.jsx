import React, { PropTypes } from 'react';
import { Search as SemanticSearch, Input } from 'semantic-ui-react';

import AsideControl from 'layouts/AsideControl';

const Search = (props) => {
  const {
    isLoading,
    results,
    value,
    handleSearchToggle,
    handleFocus,
    handleSearchChange,
    handleResultSelect,
  } = props;

  return (
    <AsideControl handleClose={handleSearchToggle}>
      <SemanticSearch
        fluid
        input={<Input fluid />}
        minCharacters={3}
        loading={isLoading}
        onResultSelect={handleResultSelect}
        onSearchChange={handleSearchChange}
        onFocus={handleFocus}
        results={results}
        value={value}
      />
    </AsideControl>
  );
};


Search.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  results: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  handleSearchToggle: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  handleResultSelect: PropTypes.func.isRequired,
};

export default Search;
