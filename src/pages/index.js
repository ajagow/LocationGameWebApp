import React, { Component, useState } from "react";
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
import { useModal, Modal } from "react-morphing-modal";
import "react-morphing-modal/dist/ReactMorphingModal.css";
import { story } from "../components/story-components/StoryContent";
import { StoryCarousel } from "../components/story-components/StoryCarousel"

import { isLocationMatch } from "../utils/locationChecker";

const IndexPage = props => {
  const { open, modalProps } = useModal();

  const [storyId, setStoryId] = useState(0);

  const { coords } = props;
  // constructor(props) {
  //   super(props);
  //   this.onClickButton = this.onClickButton.bind(this);
  // }

  const onClickButton = () => {
    if (coords) {
      const lat = coords.latitude;
      const long = coords.longitude;
      const isMatch = isLocationMatch(lat, long, 42.3292336, -71.0854208);

      const message = isMatch ? "Your location is a match!" : "Try again lol";
      alert("hello!! " + message);
    } else {
      alert("No location available");
    }
  };
  // console.log("available: " + this.props.isGeolocationAvailable);
  // console.log("enabled: " + this.props.isGeolocationEnabled);
  // console.log("coord: " + this.props.coords);
  // if (this.props.coords) {
  //   console.log("coord: " + this.props.coords.latitude);
  //   console.log("coord: " + this.props.coords.longitude);
  // }

  // const isMatch = isLocationMatch(42.3292356, -71.0854208, 42.3292336, -71.0854208);
  // console.log('dfljklsdfj: ' + isMatch);

  const setStory = (id) => {

    setStoryId(id);
    console.log(`setting story id to ${id}`);
  }

  return (
    <div>
      <SEO title="Home" />
      <Modal {...modalProps} padding={false}>
        <StoryCarousel story={story[storyId].story} title={story[storyId].title} />
      </Modal>
      <TopBar />
      <MenuSlide
        trigger={open}
        setStory={setStory}
      />
      <MapContainer lat={42.3287342} long={-71.0854208} />
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
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  watchPosition: true,
  userDecisionTimeout: 5000,
})(IndexPage);
