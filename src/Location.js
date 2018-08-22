import React from 'react';
import { string } from 'prop-types';

import './Location.css';

Location.propTypes = {
  title: string.isRequired
};

function Location(props) {
  return (
    <li>
      <button type="button">{props.title}</button>
    </li>
  );
}

export default Location;