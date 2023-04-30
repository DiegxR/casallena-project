import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";


const MapContainer = ({ google, lat, lng }) => {
  const mapStyles = {
    width: "100%",
    height: "100%",
    position: "static",
    margin: 0,
    padding: 0,
    borderRadius: "12px",
  };
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "300px",
  };

  return (
    <Map
      google={google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: lat,
        lng: lng,
      }}
      containerStyle={containerStyle}
    >
      <Marker
        position={{
          lat: lat,
          lng: lng,
        }}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCZQEhH1g1CC4UoeyXk-7xsk8uJdL8CQSM",
})(MapContainer);
