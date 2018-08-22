import React from 'react';
import { string, func, number } from 'prop-types';

import './Location.css';

Location.propTypes = {
  title: string.isRequired,
  id: number.isRequired,
  onParkClick: func.isRequired
};

function Location(props) {
  return (
    <li>
      <button
        type="button"
        onClick={() => props.onParkClick(props.id)}
      >
        {props.title}
      </button>
    </li>
  );
}

export default Location;