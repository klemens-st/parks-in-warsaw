import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, } from 'react-google-maps';

const MapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB09hoKDLzOue49_Kk1iR3h_zgiDs0kDF0&v=3',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '600px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
  </GoogleMap>
);

export default MapComponent;