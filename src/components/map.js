import React from 'react';
import GoogleMapReact from 'google-map-react';

const isClient = typeof window !== 'undefined';

const GoogleMap = (props) => {
  const {
    // address,
    googleMapsApiKey
  } = props;
  const lat = parseFloat(46.15196);
  const lng = parseFloat(19.57885);
//   46.15192, 19.57885
  return (
    <section className="google-map">
      <div className="map">
        { isClient && (
          <GoogleMapReact
            bootstrapURLKeys={{ key: googleMapsApiKey }}
            defaultCenter={[lat, lng]}
            defaultZoom={14}
          >
            <div
              className="gg-pin"
              lat={lat}
              lng={lng}
            />
          </GoogleMapReact>
        )}
      </div>
    </section>
  );
}

export default GoogleMap;