import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import mapStyles from "./GoogleMap.scss";

class GoogleMap extends Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    return nextProps === this.props;
  };

  render() {
    const { google, geo } = this.props;

    return (
      <div className="map">
        <Map
          style={mapStyles}
          google={google}
          zoom={16}
          initialCenter={geo}
          disableDefaultUI={true}
          featureType={"road"}
        >
          <Marker
            position={geo}
            draggable={true}
            animation={google.maps.Animation.DROP}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCc-H0k0DH6BS72C5kJ8atEtHug-IcqyuI"
})(GoogleMap);
