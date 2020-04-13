import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Area from "../../public/clues/playablearea.png";
import { Terrene_H1 } from "./base_components/typography";

const containerStyle = {
  position: "relative",
  width: "100vw",
  height: "calc(100vh - 100px)",
};

export class MapContainer extends Component {
  render() {
    return (
      <div>
        <Terrene_H1 style={{ color: "white" }}>Playable Area</Terrene_H1>
        <img src={"clues/playablearea.png"} />
      </div>
    );
  }
}

export default MapContainer;

// export default GoogleApiWrapper({
//   apiKey: (`${process.env.GATSBY_GOOGLE_API_KEY}`)
// })(MapContainer)
