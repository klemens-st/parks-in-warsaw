/* global google */
import React from 'react';
import MediaQuery from 'react-responsive';
import { compose, withProps, withHandlers } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

import DetailsContainer from './DetailsContainer';

// Based on examples from https://tomchentw.github.io/react-google-maps/
const MapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB09hoKDLzOue49_Kk1iR3h_zgiDs0kDF0&v=3',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div
      style={{ height: '100%' }}
      aria-label="location"
      role="application"
    />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withHandlers(() => {
    const refs = {
      map: undefined,
    };
    let bounds;

    return {
      onMapMounted: (props) => (ref) => {
        refs.map = ref;
        bounds = new google.maps.LatLngBounds();
        props.markers.map((marker) => bounds.extend(marker.location));
        refs.map.fitBounds(bounds);
      }
    };
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 52.229676, lng: 21.012229 }}
    ref={props.onMapMounted}
  >
    {props.markers.map((marker) => (
      <Marker
        key={marker.id}
        position={marker.location}
        title={marker.title}
        animation={marker.animate ? google.maps.Animation.BOUNCE : null}
        onClick={() => props.onParkClick(marker.id)}
      >
        {marker.info &&
          <MediaQuery maxWidth={425}>
            {(matches) =>
              <InfoWindow
                onCloseClick={() => props.onToggleInfo(marker.id)}
                options={{maxWidth: matches ? 150 : 200}}
              >
                <DetailsContainer
                  title={marker.title}
                  location={marker.location}
                />
              </InfoWindow>
            }
          </MediaQuery>
        }
      </Marker>
    ))}
  </GoogleMap>
);

export default MapComponent;