import React, { Component, useState, useRef } from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import { Redirect } from "@reach/router";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import {
  Terrene_H1,
  Terrene_H2,
  Terrene_P,
} from "../components/base_components/typography";
import { PrimaryButton } from "../components/base_components/buttons";
import { darkBlue } from "../components/base_components/colors";

import { story } from "../components/story-components/StoryContent";
import { StoryCarousel } from "../components/story-components/StoryCarousel";

import { getCookie } from "../utils/cookieUtils";

const StartButton = styled.div`
  width: 80vw;
  height: 55px;
  left: 16px;
  top: 679px;

  background: #f95738;
  mix-blend-mode: normal;
  border-radius: 3px;

  text-align: center;
`;

const T_H2 = styled(Terrene_H2)`
  color: white;
  line-height: 3;
  margin-bottom: 0;
`;

export const Container = styled.div`
  height: 100vh;
  background: ${darkBlue};
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const TP = styled(Terrene_P)`
  color: white;
  padding: 8px;
`;

const StoryPage = props => {
  const [storyId, setStoryId] = useState(0);

  document.cookie = "firstTime=false";

  return (
    <Container>
      <SEO title="Home" />
      <StoryCarousel
        isFirstTime={true}
        story={story[storyId].story}
        title={story[storyId].title}
      />

      <InfoContainer>
        <TP>
          Once you've finished reading the chapter, hit the button below to
          begin the game.
        </TP>
        <StartButton onClick={() => window.location.replace("/")}>
          <T_H2>Begin Game</T_H2>
        </StartButton>
      </InfoContainer>
    </Container>
  );
};

export default StoryPage;
