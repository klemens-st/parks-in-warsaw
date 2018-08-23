import React from 'react';
import { array } from 'prop-types';

import MapComponent from './MapComponent';
import ErrorBoundary from './ErrorBoundary';
import './Main.css';

Main.propTypes = {
  parks: array.isRequired
};

function Main({parks, ...other}) {
  return (
    <main>
      <ErrorBoundary>
        <MapComponent
          markers={parks}
          {...other}
        />
      </ErrorBoundary>
    </main>
  );
}

export default Main;