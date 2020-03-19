import React from "react";
import { useRef } from "react";


import {
  Terrene_H3,
} from "../../base_components/typography";
import { ListStyle, ListTextContainerStyle } from "../../List/List.js";
import { story } from "../StoryContent";

export const VotingPreview = props => {
  const { title, open, id, setStory } = props;

  const ListItem = props => {
    const { title, open, id } = props;
    const btnRef = useRef(null);

    /*TODO: dupe code StoryList*/
    const openStory = id => {
      setStory(id);
      open(btnRef);
    };  

    return (
      <ListStyle ref={btnRef} onClick={() => openStory(id)}>
        <ListTextContainerStyle>
          <Terrene_H3>{title}</Terrene_H3>
        </ListTextContainerStyle>
      </ListStyle>
    );
  };

  return (
    <>
      <Terrene_H3>"All Missions Complete! Time to vote."</Terrene_H3>
      <ListItem title={story[2].title} id="2" open={open} />
    </>
  );
};
