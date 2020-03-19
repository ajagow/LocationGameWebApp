import styled from "styled-components";
import React from "react";

import SwipeableViews from "react-swipeable-views";
import Grid from "@material-ui/core/Grid";

import {
  Terrene_H2,
  Terrene_H3,
  Terrene_H4,
} from "../base_components/typography";
import { darkBlue, cream } from "../base_components/colors";

const clues = [
  { id: 1, questName: "Carleton Court Dog Park", clue: "hints/west.png" },
  { id: 2, questName: "Mass Ave T Stop", clue: "hints/north.png" },
  { id: 3, questName: "Five Horses Tavern", clue: "hints/north.png" },
  { id: 4, questName: "7-Eleven", clue: "hints/north.png" },
];

const empty = "hints/lock.svg";

const ClueListContainer = styled.div`
  overflow: scroll;
  height: 450px;
`;

const ClueImg = styled.img`
  margin-bottom: 8px;
`;

const ClueContainerStyle = styled(Grid)`
  border-radius: 8px;
  padding: 8px;
  height: 150px;
  margin-top: 20px !important;
  flex-direction: column;
`;

const ClueContainerUnsolved = styled(ClueContainerStyle)`
  border: 2px dashed ${darkBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 20px !important;
`;

const ClueContainerSolved = styled(ClueContainerStyle)`
  border: 2px solid ${darkBlue};
  background: ${darkBlue};
  color: ${cream};
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 20px !important;
`;

const GridContainer = styled(Grid)`
  margin: 0;
`;

const QuestListHolderStyle = styled.div`
  margin: 0;
  margin-bottom: 20px;
`;

export class ClueList extends React.Component {
  state = {
    showList: true,
    listItem: 0,
    update: 0,
  };

  toggleShowList = itemId => {
    this.setState((prevState, props) => ({
      showList: !prevState.showList,
      listItem: itemId,
    }));
  };

  createList() {
    var ans = [];

    for (let i = 0; i < clues.length; i++) {
      const quest = clues[i];

      const s = this.props.quests.filter(obj => {
        return obj.questId - 1 === i;
      });

      const isSolved = s.length;

      if (isSolved) {
        const clueImg = clues[i].clue;
        const listItem = (
          <ClueContainerSolved item xs={5}>
            <ClueImg src={clueImg} />
            <Terrene_H3>{clues[i].questName}</Terrene_H3>
          </ClueContainerSolved>
        );
        ans.push(listItem);
      } else {
        const listItem = (
          <ClueContainerUnsolved item xs={5}>
            <ClueImg src={"hints/lock.svg"} />
          </ClueContainerUnsolved>
        );
        ans.push(listItem);
      }
    }

    return ans;
  }

  render() {
    return (
      <ClueListContainer>
        <Terrene_H3>Chapter 1: The Reckoning</Terrene_H3>
        {this.state.showList && (
          <QuestListHolderStyle>
            <GridContainer container spacing={3} justify={"space-evenly"}>
              {this.createList()}
            </GridContainer>
          </QuestListHolderStyle>
        )}
        {!this.state.showList && <p>Hello></p>}
      </ClueListContainer>
    );
  }
}
