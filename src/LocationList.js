import React from 'react';
import { array } from 'prop-types';

import Location from './Location';
import './LocationList.css';

LocationList.propTypes = {
  parks: array.isRequired
};

function LocationList(props) {
  return (
    <ul aria-label="List of locations">
      {props.parks.map((park) => (
        <Location key={park.id} title={park.title} />
      ))}
    </ul>
  );
}

export default LocationList;