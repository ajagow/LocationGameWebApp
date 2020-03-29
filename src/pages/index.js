import React, { Component, useState, useRef } from "react";
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
import { darkBlue } from "../components/base_components/colors";
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
    open: true,
  });

  const [quests, setQuestsState] = useState([]);

  const { coords } = props;
  const [storyId, setStoryId] = useState(0);
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
  const setQuests = data => {
    setQuestsState(data);
  };
  const setStory = id => {
    setStoryId(id);
    console.log(`setting story id to ${id}`);
  };

  const isVisited = typeof window !== `undefined` ? getCookie("visit") : "true";
  const isFirstTime = typeof window !== `undefined` ? getCookie("firstTime") : "false";


  console.log("isvisited: " + isVisited + "    first: " + isFirstTime + "  dkjf: " + typeof window)
  if (isVisited === "" || isVisited === "false") {
    window.location.replace(`/page-2`);
  } else if (isFirstTime === "true") {
    window.location.replace(`/story-page`);
  } else {
    return (
      <div>
        <SEO title="Home" />
        <Modal {...modalProps} padding={false}>
          <StoryCarousel
            story={story[storyId].story}
            title={story[storyId].title}
            id={storyId}
            setStory={setStory}
            quests={quests}
          />
        </Modal>
        <TopBar showLogout={true} />
        <MenuSlide
          open={open}
          setStory={setStory}
          quests={quests}
          setQuests={setQuests}
        />
        <MapContainer lat={42.3287342} long={-71.0854208} />
      </div>
    );
  }
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  watchPosition: true,
  userDecisionTimeout: 5000,
})(IndexPage);
