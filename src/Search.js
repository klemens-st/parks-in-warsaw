import React from 'react';

import './Search.css';

function Search() {
  return (
    <div className="search" role="search">
      <label>Filter locations:
        <input type="search" name="search" />
      </label>
    </div>
  );
}

export default Search;