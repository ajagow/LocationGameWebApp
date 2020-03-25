import styled from "styled-components";
import React from "react";

import SwipeableViews from "react-swipeable-views";

import { Input } from "antd";

import {
  Terrene_H2,
  Terrene_H3,
  Terrene_H4,
} from "../base_components/typography";

import LocationButton from "../base_components/LocationButton";
import { Attempts } from "../attempts_components/attempts";
import { VotingPreview } from "../story-components/voting-components/VotingPreview";

import back from "../../../public/icons/back.svg";
import { IconSVG, ClueImage } from "../base_components/images";

import { ListStyle, ListTextContainerStyle } from "../List/List.js";

import { mediumBlue, red } from "../base_components/colors";

const quests = [
  { id: 1, questName: "It's always greener", clue: "clues/quest1.png" },
  { id: 2, questName: "Skrrt", clue: "clues/quest2.png" },
  { id: 3, questName: "Apocalypse Plus One", clue: "clues/quest3.png" },
  { id: 4, questName: "Would you be so lucky?", clue: "clues/quest4.png" },
  { id: 5, questName: "Choo choo", clue: "clues/quest5.png" },
  { id: 6, questName: "All hail the queen", clue: "clues/quest6.png" },
  { id: 7, questName: "The British are coming!", clue: "clues/quest7.png" },
];

export const QuestListStyle = styled.a`
  width: 100px;
  height: 50px;
  border: 1px solid black;
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  position: absolute;
  background: white;
  top: 40px;
  width: 100vw;
`;

const QuestListItemStyle = styled.div`
  padding: 20px;
  box-shadow: 10px 5px 5px hsla(0, 0%, 0%, 0.04);
  width: 90%;
  border-radius: 8px;
`;

const QuestListHolderStyle = styled.div`
  margin: 0;
  margin-bottom: 150px;
`;

const QuestListHolderStyle2 = styled(QuestListHolderStyle)`
  margin-top: 25px;
`;

export const QuestDetailContainerStyle = styled.div`
  overflow: scroll;
  height: 450px;
`;

export const QuestDetailStyle = styled.div`
  overflow: scroll;
  height: 90%;
`;

const ImageListStyle = styled.div`
  width: 75px;
  border-radius: 8px;
  position: relative;
  top: -20px;
`;

const Completed = styled(Terrene_H4)`
  color: ${mediumBlue};
`;

const Incomplete = styled(Terrene_H4)`
  color: ${red};
`;

const StyledInput = styled(Input)`
  height: 48px;
  padding: 8px;
  border: 1px solid grey;
  border-radius: 8px 0px 0px 8px;
`;

export class QuestDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationGuess: "",
    };
  }

  render() {
    const { id } = this.props;
    console.log(this.state.locationGuess);
    return (
      <div>
        <BackButton>
          <IconSVG src={back} alt="Logo" />
          <Terrene_H3
            onClick={() => {
              this.props.toggle(0);
              this.props.rerenderParentCallback();
              this.props.rerenderAttemptsCallback();
            }}
            style={{ margin: 0 }}
          >
            back to mission list
          </Terrene_H3>
        </BackButton>

        <QuestListHolderStyle2>
          <Terrene_H2>{quests[parseInt(id - 1)].questName}</Terrene_H2>
          <StyledInput
            placeholder={"location guess"}
            onChange={e => this.setState({ locationGuess: e.target.value })}
          />
          <LocationButton
            id={id}
            guess={this.state.locationGuess}
            rerenderParentCallback={this.props.rerenderParentCallback}
            open={this.props.open}
            setStory={this.props.setStory}
            attempts={this.props.attempts}
            quests={this.props.quests}
            rerenderAttemptsCallback={this.props.rerenderAttemptsCallback}
          />
          <ClueImage src={quests[parseInt(id - 1)].clue} />
        </QuestListHolderStyle2>
      </div>
    );
  }
}

class QuestListItems extends React.Component {
  createList() {
    var ans = [];

    for (let i = 0; i < quests.length; i++) {
      const quest = quests[i];

      const s = this.props.questItems.filter(obj => {
        return obj.questId - 1 === i;
      });
      const message =
        s.length > 0 ? (
          <Completed>completed</Completed>
        ) : (
          <Incomplete>incomplete</Incomplete>
        );
      const listItem = (
        <ListStyle
          onClick={() => this.props.toggleShowList(quest.id)}
          key={quest.id.toString()}
        >
          <ListTextContainerStyle>
            <Terrene_H3>{quest.questName}</Terrene_H3>
            <Terrene_H4>{message}</Terrene_H4>
          </ListTextContainerStyle>
        </ListStyle>
      );
      ans.push(listItem);
    }

    return ans;
  }

  render() {
    const { questItems } = this.props;
    return <div>{this.createList()}</div>;
  }
}

export class QuestList extends React.Component {
  constructor(props) {
    super(props);
  }

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

  render() {
    return (
      <QuestDetailContainerStyle>
        <Attempts attempts={this.props.attempts} update={this.state.update} />
        {this.state.showList && (
          <QuestListHolderStyle>
            {//TODO: change unlock condition to voted in deliberation (from mission page)
            this.props.quests.length === 7 || this.props.attempts.length > 2 ? (
              <VotingPreview
                setStory={this.props.setStory}
                open={this.props.open}
              />
            ) : null}

            <QuestListItems
              questItems={this.props.quests}
              toggleShowList={this.toggleShowList}
            />
          </QuestListHolderStyle>
        )}
        {!this.state.showList && (
          <QuestDetail
            toggle={this.toggleShowList}
            id={this.state.listItem}
            rerenderParentCallback={this.props.rerenderParentCallback}
            open={this.props.open}
            setStory={this.props.setStory}
            attempts={this.props.attempts}
            quests={this.props.quests}
            rerenderAttemptsCallback={this.props.rerenderAttemptsCallback}
          />
        )}
      </QuestDetailContainerStyle>
    );
  }
}
