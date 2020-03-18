import React, { Component, useState } from "react";
import { Link, graphql } from "gatsby";

import { Redirect } from "@reach/router";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { geolocated } from "react-geolocated";

import MapContainer from "../components/MapContainer";

import TopBar from "../components/top_bar/topBar";

import { Terrene_H1 } from "../components/base_components/typography";
import { PrimaryButton } from "../components/base_components/buttons";
import { darkBlue } from "../components/base_components/colors"
import { MenuSlide } from "../components/menu-components/menuSlide";
import { useModal, Modal } from "react-morphing-modal";
import "react-morphing-modal/dist/ReactMorphingModal.css";
import { story } from "../components/story-components/StoryContent";
import { StoryCarousel } from "../components/story-components/StoryCarousel";

import { isLocationMatch } from "../utils/locationChecker";
import { getCookie } from "../utils/cookieUtils";

const IndexPage = props => {
  const { open, modalProps } = useModal({
    background: darkBlue,
  });

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

  const setStory = id => {
    setStoryId(id);
    console.log(`setting story id to ${id}`);
  };

  return (
    <div>
      <SEO title="Home" />
      <Modal {...modalProps} padding={false}>
        <StoryCarousel
          story={story[storyId].story}
          title={story[storyId].title}
        />
      </Modal>
      <TopBar />
      <MenuSlide open={open} setStory={setStory} />
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
