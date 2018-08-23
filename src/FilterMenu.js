import React from 'react';
import MediaQuery from 'react-responsive';
import { array, func, bool } from 'prop-types';

import Search from './Search';
import LocationList from './LocationList';
import './FilterMenu.css';

FilterMenu.propTypes = {
  parks: array.isRequired,
  onParkClick: func.isRequired,
  filterParks: func.isRequired,
  toggleDrawer: func.isRequired,
  showDrawer: bool.isRequired
};

function FilterMenu({parks, onParkClick, filterParks,
  toggleDrawer, showDrawer}) {
  return (
    <MediaQuery maxWidth={769}>
      {(matches) =>
        <nav className={(showDrawer || !matches) ? 'show' : ''}>
          {matches &&
            <div className="btn-container">
              <button
                type="button"
                onClick={toggleDrawer}
                className="close-button"
              >
                <img src={require('./img/md-close.svg')} alt="Close"/>
              </button>
            </div>
          }
          <Search filterParks={filterParks} />
          <LocationList
            parks={parks}
            onParkClick={onParkClick}
          />
        </nav>
      }
    </MediaQuery>
  );
}

export default FilterMenu;