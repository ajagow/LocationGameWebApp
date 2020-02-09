import React, { Component } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { geolocated } from "react-geolocated";

import { Terrene_H1 } from "../components/base_components/typography";

class IndexPage extends Component {
  render() {
    console.log("available: " + this.props.isGeolocationAvailable);
    console.log("enabled: " + this.props.isGeolocationEnabled);
    console.log("coord: " + this.props.coords);
    if (this.props.coords) {
      console.log("coord: " + this.props.coords.latitude);
      console.log("coord: " + this.props.coords.longitude);
    }

    return (
      <Layout>
        <SEO title="Home" />
        <Terrene_H1>Hey there</Terrene_H1>
        {this.props.coords && <h1>{this.props.coords.latitude}</h1>}

        {this.props.coords && <h1>{this.props.coords.longitude}</h1>}
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(IndexPage);
