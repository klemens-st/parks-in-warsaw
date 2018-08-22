import React from 'react';
import { array, func } from 'prop-types';

import Header from './Header';
import MapComponent from './MapComponent';
import './Main.css';

Main.propTypes = {
  parks: array.isRequired,
  onParkClick: func.isRequired,
  onToggleInfo: func.isRequired
};

function Main(props) {
  return (
    <main>
      <Header />
      <MapComponent
        markers={props.parks}
        onParkClick={props.onParkClick}
        onToggleInfo={props.onToggleInfo}
      />
    </main>
  );
}

export default Main;