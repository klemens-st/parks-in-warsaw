import React, { Component } from 'react';
import { func } from 'prop-types';

import './Search.css';

class Search extends Component {
  static propTypes = {
    filterParks: func.isRequired
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
            value={this.state.query}
            onChange={this.updateQuery}
          />
        </label>
      </div>
    );
  }
}

export default Search;