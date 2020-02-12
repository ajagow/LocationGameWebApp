import styled from "styled-components";
import React from 'react';

import SwipeableViews from 'react-swipeable-views';

import { Terrene_H1 } from "../base_components/typography";



const quests = [
  {id: 1, questName: "Finding the Dragon", clue: "clues/quest1.png"},
  {id: 2, questName: "Hiding the Dragon", clue: "clues/quest2.png"},
  {id: 3, questName: "Saving the Dragon", clue: "clues/quest3.png"},
  {id: 4, questName: "Freeing the Dragon", clue: "clues/quest4.jpg"},
];

export const QuestListStyle = styled.a`
    width: 100px;
    height: 50px;
    border: 1px solid black;

`;

export const QuestDetailContainerStyle = styled.div`
    overflow: scroll;
    height: 90%;
`;

export const QuestDetailStyle = styled.div`
    overflow: scroll;
    height: 90%;
`;

export class QuestDetail extends React.Component {
  render() {
    const { id } = this.props;
    return(
      <div>
        <p onClick={() => this.props.toggle(0)}>back</p>
        <Terrene_H1>{quests[parseInt(id - 1)].questName}</Terrene_H1>
        <img src={quests[parseInt(id - 1)].clue}/>
      </div>

    );
  }

}



export class QuestList extends React.Component {
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


  render() {
    const listItems = quests.map((quest) =>
    <li onClick={() => this.toggleShowList(quest.id)} key={quest.id.toString()}>
      {quest.questName}
    </li>
  );

  return (
    <div>
    {this.state.showList && 
        <ul>{listItems}</ul>
    }
    {!this.state.showList && 
        <QuestDetail toggle={this.toggleShowList} id={this.state.listItem}/>
    }
 
      </div>


  );

  }
}




