import React, { Component } from 'react';
import { func, object } from 'prop-types';

import './Search.css';

class Search extends Component {
  static propTypes = {
    filterParks: func.isRequired,
    searchField: object.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (e) => {
    this.setState({
      query: e.target.value
    });

    this.props.filterParks(e.target.value);
  }

  render() {
    return (
      <div className="search" role="search">
        <label>Filter locations:
          <input
            type="search"
            name="search"
            ref={this.props.searchField}
            value={this.state.query}
            aria-controls="results"
            onChange={this.updateQuery}
          />
        </label>
      </div>
    );
  }
}

export default Search;