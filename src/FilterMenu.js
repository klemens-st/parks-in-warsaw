import React from 'react';
import { array } from 'prop-types';

import Search from './Search';
import LocationList from './LocationList';
import './FilterMenu.css';

FilterMenu.propTypes = {
  parks: array.isRequired
};

function FilterMenu(props) {
  return (
    <nav>
      <Search />
      <LocationList parks={props.parks} />
    </nav>
  );
}

export default FilterMenu;