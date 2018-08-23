import React from 'react';
import { array, func } from 'prop-types';

import Location from './Location';
import './LocationList.css';

LocationList.propTypes = {
  parks: array.isRequired,
  onParkClick: func.isRequired
};

function LocationList(props) {
  return (
    <ul id="results" aria-label="List of locations">
      {props.parks.map((park) => (
        <Location
          key={park.id}
          id={park.id}
          title={park.title}
          onParkClick={props.onParkClick}
        />
      ))}
    </ul>
  );
}

export default LocationList;