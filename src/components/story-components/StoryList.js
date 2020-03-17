import styled from "styled-components";
import React from "react";
import { useRef } from "react";

import SwipeableViews from "react-swipeable-views";

import {
  Terrene_H1,
  Terrene_H2,
  Terrene_H3,
} from "../base_components/typography";
import { ListStyle, ListTextContainerStyle } from "../List/List.js";

import back from "../../../public/icons/back.svg";
import { IconSVG } from "../base_components/images";

import { story } from "./StoryContent";
import { darkBlue, cream } from "../base_components/colors";
import { StoryCarousel } from "./StoryCarousel";

import { useModal, Modal } from "react-morphing-modal";
import "react-morphing-modal/dist/ReactMorphingModal.css";

export const QuestDetailContainerStyle = styled.div`
  overflow: scroll;
  height: 450px;
`;

const TeamCharacterStyle = styled(ListTextContainerStyle)`
  color: tomato;
`;

export const StoryList = props => {
  const { trigger, setStory } = props;

  const ChapterList = () => {
    const ListItem = props => {
      const { title, getTriggerProps, id } = props;
      const btnRef = useRef(null);

      const openStory = id => {
        setStory(id);
        getTriggerProps(btnRef);
      };

      return (
        <ListStyle ref={btnRef} onClick={() => openStory(id)}>
          <ListTextContainerStyle>
            <Terrene_H3>{title}</Terrene_H3>
          </ListTextContainerStyle>
        </ListStyle>
      );
    };

    var ans = [];

    for (let i = 0; i < story.length; i++) {
      const listItem = (
        <ListItem title={story[i].title} getTriggerProps={trigger} id={i} />
      );

      ans.push(listItem);
    }

    return <div>{ans}</div>;
  };

  return (
    <QuestDetailContainerStyle>
      <ChapterList />
    </QuestDetailContainerStyle>
  );
};
