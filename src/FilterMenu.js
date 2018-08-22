import React from 'react';
import { array, func } from 'prop-types';

import Search from './Search';
import LocationList from './LocationList';
import './FilterMenu.css';

FilterMenu.propTypes = {
  parks: array.isRequired,
  onParkClick: func.isRequired
};

function FilterMenu(props) {
  return (
    <nav>
      <Search />
      <LocationList
        parks={props.parks}
        onParkClick={props.onParkClick}
      />
    </nav>
  );
}

export default FilterMenu;