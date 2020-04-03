import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Area from "../../public/clues/playablearea.png";

const containerStyle = {
  position: "relative",
  width: "100vw",
  height: "calc(100vh - 100px)",
};

export class MapContainer extends Component {
  render() {
    return <img src={"clues/playablearea.png"} />;
  }
}

export default MapContainer;

// export default GoogleApiWrapper({
//   apiKey: (`${process.env.GATSBY_GOOGLE_API_KEY}`)
// })(MapContainer)
