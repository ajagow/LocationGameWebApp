import React, { Component } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { geolocated } from "react-geolocated";

import MapContainer from "../components/MapContainer";

import { TopBar } from "../components/top_bar/topBar";


import { Terrene_H1 } from "../components/base_components/typography";
import { PrimaryButton } from "../components/base_components/buttons";
import { MenuSlide } from "../components/menu-components/menuSlide";

import { isLocationMatch } from "../utils/locationChecker";

class IndexPage extends Component {

  constructor(props) {
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton() {

    if (this.props.coords) {
      const lat = this.props.coords.latitude;
      const long = this.props.coords.longitude;
      const isMatch = isLocationMatch(lat, long, 42.3292336, -71.0854208);

      const message = isMatch ? 'Your location is a match!' : 'Try again lol';
      alert('hello!! ' + message);
    }

    else {
      alert('No location available');
    }



  }

  render() {
    // console.log("available: " + this.props.isGeolocationAvailable);
    // console.log("enabled: " + this.props.isGeolocationEnabled);
    // console.log("coord: " + this.props.coords);
    // if (this.props.coords) {
    //   console.log("coord: " + this.props.coords.latitude);
    //   console.log("coord: " + this.props.coords.longitude);
    // }

    // const isMatch = isLocationMatch(42.3292356, -71.0854208, 42.3292336, -71.0854208);
    // console.log('dfljklsdfj: ' + isMatch);

    return (
      <div>
        <SEO title="Home" />
        <TopBar/>

        <MenuSlide/>
        {/* <MapContainer lat={42.3287342} long={-71.0854208}/> */}
        {/* {this.props.coords && 
          <MapContainer lat={this.props.coords.latitude} long={this.props.coords.longitude}/>
          } */}
        {/* {this.props.coords && <h1>{this.props.coords.latitude}</h1>}

        {this.props.coords && <h1>{this.props.coords.longitude}</h1>}
        <PrimaryButton type="primary" onClickFnc={this.onClickButton} title={"hello"}/>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great. {isMatch}</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
 
        </div>
        <Link to="/page-2/">Go to page 2</Link> */}
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  watchPosition: true,
  userDecisionTimeout: 5000,
})(IndexPage);
