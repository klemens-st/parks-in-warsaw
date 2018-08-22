/* global google */
import React from 'react';
import { compose, withProps, } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

import Details from './Details';

// Based on examples from https://tomchentw.github.io/react-google-maps/
const MapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB09hoKDLzOue49_Kk1iR3h_zgiDs0kDF0&v=3',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div
      style={{ height: 'calc(100% - 57px)' }}
      aria-label="location"
      role="application"
    />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 52.229676, lng: 21.012229 }}
  >
    {props.markers.map((marker) => (
      <Marker
        key={marker.id}
        position={marker.location}
        title={marker.title}
        animation={marker.animate ? google.maps.Animation.BOUNCE : null}
        onClick={() => props.onParkClick(marker.id)}
      >
        {marker.info && <InfoWindow
          onCloseClick={() => props.onToggleInfo(marker.id)}>
          <Details />
        </InfoWindow>}
      </Marker>
    ))}
  </GoogleMap>
);

export default MapComponent;