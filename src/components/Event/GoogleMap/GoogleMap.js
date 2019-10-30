import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "320px",
  height: "280px"
};

class GoogleMap extends Component {
  constructor() {
    super();
    this.state = {
      wework: [
        {
          lat: 37.5,
          lng: 127.053
        },
        {
          lat: 37.570588,
          lng: 126.9836
        },
        {
          lat: 37.565075,
          lng: 126.987189
        }
      ]
    };
  }

  renderMarker = () => {
    const { wework } = this.state;
    const { google } = this.props;

    return wework.map((el, index) => {
      return (
        <Marker
          key={index}
          position={{
            lat: el.lat,
            lng: el.lng
          }}
          draggable={true}
          animation={google.maps.Animation.DROP}
        />
      );
    });
  };

  render() {
    const { renderMarker } = this;
    const { google } = this.props;
    return (
      <>
        <Map
          style={mapStyles}
          google={google}
          zoom={11}
          initialCenter={{ lat: 37.537, lng: 127.0123 }}
          disableDefaultUI={true}
        >
          {renderMarker()}
        </Map>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCc-H0k0DH6BS72C5kJ8atEtHug-IcqyuI"
})(GoogleMap);
