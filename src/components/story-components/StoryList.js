import styled from "styled-components";
import React from 'react';

import SwipeableViews from 'react-swipeable-views';

import { Terrene_H1, Terrene_H2, Terrene_H3 } from "../base_components/typography";
import { ListStyle, ListTextContainerStyle } from "../List/List.js";

import back from '../../../public/icons/back.svg';
import { IconSVG } from '../base_components/images';

import { story } from "./StoryContent";
import { darkBlue, cream } from "../base_components/colors";


const chapters = [
  {id: 1, title: "Prologue", clue: "clues/quest1.png"},
  {id: 2, title: "Chapter 1: The Pivot", clue: ""}
];

const BackButton = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  position: absolute;
  background: white;
    top: 40px;
    width: 100vw;
`;

const StoryContentStyle = styled.div`
  margin-top: 25px;
  padding: 8px;
  background: ${darkBlue};
  color: ${cream};
`;


export const QuestDetailContainerStyle = styled.div`
    overflow: scroll;
    height: 450px;
`;

const TeamCharacterStyle = styled(ListTextContainerStyle)`
  color: tomato;
`;



const Chapter = ({id, toggle}) => {
  const listItems = story[id].story.map((storyPart) =>
    <Terrene_H3>{storyPart}</Terrene_H3>
  );
 return (
   <div>
      <BackButton>
        <IconSVG src={back} alt="Logo" /> 
        <Terrene_H3 onClick={() => toggle(0)} style={{margin: 0}}>back to chapters</Terrene_H3>
      </BackButton>
      <StoryContentStyle>
        <Terrene_H3>{chapters[id].title} </Terrene_H3>
         {listItems}
      </StoryContentStyle>

   </div>
 )
}

export class StoryList extends React.Component {
  state = {
    showList: true,
    listItem: 0
  }

  toggleShowList = (itemId) => {

    this.setState((prevState, props) => ({
      showList: !prevState.showList,
      listItem: itemId
    }));
  };


  createList(){

    var ans = [];

    for (let i = 0; i < chapters.length; i++) { 
      const listItem =   <ListStyle onClick={() => this.toggleShowList(i)} >
      <ListTextContainerStyle>
      <Terrene_H3>{chapters[i].title}</Terrene_H3>
      </ListTextContainerStyle>
      
    </ListStyle>;

    ans.push(listItem);


    }

    return ans;


  }


  render() {


  return (
    <QuestDetailContainerStyle>
    { this.state.showList && this.createList()}

    { !this.state.showList && <Chapter id={this.state.listItem} toggle={this.toggleShowList}/>}
 
    </QuestDetailContainerStyle>


  );

  }
}




