import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import logo from '../../assets/logo.svg'

const MapContainer = ({ google, lat, lng}) => {
 
  const mapStyles = {
    width: '90%',
    height: '85%',
    alignSelf: 'center',
    borderRadius: '12px'
  };
 
  return (
    <Map
      google={google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: lat,
        lng: lng
      }}
    >
      <Marker
        position={{
          lat: lat,
          lng: lng
        }}
        icon={<img src={logo} alt="" />}
      />
    </Map>
  );
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCZQEhH1g1CC4UoeyXk-7xsk8uJdL8CQSM'
})(MapContainer);