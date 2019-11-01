import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import mapStyles from "./GoogleMap.scss";

class GoogleMap extends Component {
  constructor() {
    super();
    this.state = {
      geo: {
        lat: 37.5,
        lng: 127.053
      }
    };
  }

  // getData = () => {
  //   const { eventId } = this.props.match.params;
  //   fetch(`http://localhost:8000/event/${eventId}`)
  //     .then(res => res.json())
  //     .then(res => console.log(res));
  // };

  componentDidMount = () => {
    const { getData } = this;
    // getData();
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    return nextState !== this.state;
  };

  // renderMarker = () => {
  //   const { wework } = this.state;
  //   const { google } = this.props;

  //   return wework.map((el, index) => {
  //     return (
  //       <Marker
  //         key={index}
  //         position={{
  //           lat: el.lat,
  //           lng: el.lng
  //         }}
  //         draggable={true}
  //         animation={google.maps.Animation.DROP}
  //       />
  //     );
  //   });
  // };

  render() {
    // const { renderMarker } = this;
    const { google } = this.props;
    const { geo } = this.state;
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
