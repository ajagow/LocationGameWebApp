import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const containerStyle = {
  position: 'relative',  
  width: '100vw',
  height: 'calc(100vh - 100px)'
}

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14} initialCenter={{
            lat: this.props.lat,
            lng: this.props.long
        }}
        containerStyle={containerStyle}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>

            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (`${process.env.GOOGLE_API_KEY}`)
})(MapContainer)