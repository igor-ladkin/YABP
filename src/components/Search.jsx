import React, { Component, PropTypes } from 'react';
import { Search as SemanticSearch, Input } from 'semantic-ui-react';
import { filter, escapeRegExp, pick, join, at } from 'lodash';

import history from 'helpers/history';
import { postPath } from 'helpers/routes';

import AsideControl from 'layouts/AsideControl';

class Search extends Component {
  constructor(props) {
    super(props);

    this.resetComponent = this.resetComponent.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);

    this.state = {
      isLoading: false,
      results: [],
      value: '',
    };
  }

  resetComponent() {
    this.setState({ isLoading: false, results: [], value: '' });
  }

  handleSearchChange(e, value) {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(escapeRegExp(this.state.value), 'i');
      const indexText = result => join(at(result, ['title', 'description']), ' ');
      const isMatch = result => re.test(indexText(result));
      const results =
        filter(this.props.items, isMatch)
          .map(item => pick(item, ['id', 'image', 'title']));

      this.setState({
        isLoading: false,
        results,
      });

      return true;
    }, 500);
  }

  render() {
    const { isLoading, value, results } = this.state;
    const { handleSearchToggle } = this.props;

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
