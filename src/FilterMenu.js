import React from 'react';

import Search from './Search';
import LocationList from './LocationList';

function FilterMenu() {
  return (
    <nav>
      <Search />
      <LocationList />
    </nav>
  );
}

export default FilterMenu;