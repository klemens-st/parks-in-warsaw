import React from 'react';


function Search() {
  return (
    <div className="search">
      <label>Filter locations:
        <input type="text" name="filter" />
      </label>
    </div>
  );
}

export default Search;