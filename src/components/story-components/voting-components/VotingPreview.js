import styled from "styled-components";
import React from "react";
import { useRef } from "react";

import Grid from '@material-ui/core/Grid';

import loaderIcon from "../../../../public/icons/loader.svg";
import { IconSVG } from "../../base_components/images";

import {
  Terrene_H3,
} from "../../base_components/typography";
import { ListStyle, ListTextContainerStyle } from "../../List/List.js";
import { story } from "../StoryContent";
import { teamMembers } from "../../team-components/TeamList"

/*TODO: dupe from clueList*/
const GridContainer = styled(Grid)`
    margin:0;
`;

const LoadingIcon = styled.img`
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 0px;
    margin-right: 1em;
`;

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
  
  /*TODO: placeholder names? */
  const VoteStatusList = props => {
      return (
        <GridContainer container spacing={1} justify={'space-evenly'}>
          { teamMembers.map((member, index) => {
              return <GridContainer item xs={6}> 
                  <Terrene_H3>
                    <LoadingIcon src={loaderIcon} alt="loadingStatus"></LoadingIcon>
                    {member.name} 
                    {index == 0 ? "(you)" : ""}
                  </Terrene_H3>
                </GridContainer>;
            }) 
          }
        </GridContainer>
      );
  };

  return (
    <>
      <Terrene_H3>"All Missions Complete! Time to vote."</Terrene_H3>
      <ListItem title={story[2].title} id="2" open={open} />
      <VoteStatusList/>
    </>
  );
};
