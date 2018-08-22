import React from 'react';
import { array } from 'prop-types';

import Header from './Header';
import MapComponent from './MapComponent';
import './Main.css';

Main.propTypes = {
  parks: array.isRequired
};

function Main(props) {
  return (
    <main>
      <Header />
      <MapComponent markers={props.parks}/>
    </main>
  );
}

export default Main;