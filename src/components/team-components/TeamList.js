import styled from "styled-components";
import React from 'react';

import SwipeableViews from 'react-swipeable-views';

import { Terrene_H1, Terrene_H3, Terrene_H4 } from "../base_components/typography";
import { ListStyle, ListTextContainerStyle } from "../List/List.js";

import { mediumBlue } from "../base_components/colors";


export const teamMembers = [
  {id: 1, name: "Ian Anderson", clue: "clues/quest1.png"},
  {id: 2, name: "Noelle Wong", clue: "clues/quest2.png"},
  {id: 3, name: "Joe Wang", clue: "clues/quest3.png"},
  {id: 4, name: "Noah Appleby", clue: "clues/quest4.jpg"},
];

const characters = [
  'Quinn',
  'Alex',
  'Jamie',
  'Sam'
]

export const QuestDetailContainerStyle = styled.div`
    overflow: scroll;
    height: 450px;
`;

const TeamCharacterStyle = styled(Terrene_H4)`
  color: ${mediumBlue};
`;




export class TeamList extends React.Component {
  state = {
    quests: []
  }

  componentDidMount() {
        fetch(`http://45.77.222.45:3000/quests`)
        .then(res => res.json())
        .then((data) => {
            this.setState({ quests: data });
        })
        .catch(console.log)
    }

  createList(){

    var ans = [];

    for (let i = 0; i < teamMembers.length; i++) { 
      const listItem =   <ListStyle>
      <ListTextContainerStyle>
      <Terrene_H3>{teamMembers[i].name}</Terrene_H3>
      <TeamCharacterStyle>as {characters[i]}</TeamCharacterStyle>
      </ListTextContainerStyle>
      
    </ListStyle>;

    ans.push(listItem);


    }

    return ans;


  }


  render() {


  return (
    <QuestDetailContainerStyle>
    { this.createList()}
 
    </QuestDetailContainerStyle>


  );

  }
}




