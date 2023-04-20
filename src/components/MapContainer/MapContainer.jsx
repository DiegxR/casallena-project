import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import logo from '../../assets/logo.svg'

const MapContainer = ({google, lat, lng}) => {
    const mapStyles = {
      width: '100%',
      height: '100vh'
    };
    return (
      <Map
        google={google}
        zoom={14}
        style={mapStyles}
        onClick={(e) =>console.log(e)}
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
    title={'AAAAA'}
    icon={logo}
  />
      </Map>
    );
  }


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCZQEhH1g1CC4UoeyXk-7xsk8uJdL8CQSM'
})(MapContainer);