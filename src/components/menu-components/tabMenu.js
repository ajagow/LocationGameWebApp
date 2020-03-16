import React from 'react';
import styled from "styled-components";

import { darkBlue, white } from '../base_components/colors';
import { Terrene_H2 } from '../base_components/typography';
import { IconSVG } from '../base_components/images';
import { MenuSliderStyle } from './menuSlide';

import { QuestList } from '../quest-components/QuestList';
import { TeamList } from '../team-components/TeamList';
import { ClueList } from '../clue-components/ClueList';
import { StoryList } from '../story-components/StoryList';

import chapter from '../../../public/icons/chapter.svg';
import hint from '../../../public/icons/hint.svg';
import people from '../../../public/icons/people.svg';
import menu from '../../../public/icons/menu.svg';


import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import SwipeableViews from 'react-swipeable-views';

const theme = createMuiTheme({
    overrides: {
    MuiTabs: {
        flexContainer: {
            justifyContent: 'space-evenly',
            backgroundColor: `${white}`,
            borderRadius: '8px 8px 0 0',
        }
    },
    PrivateTabIndicator: {
        colorSecondary: {
            backgroundColor: `${darkBlue}`
        }
    }
    }

});



export const TabContentStyle = styled.div`
    margin-top: 8px;
    padding-left: 8px;
    padding-right: 8px;
`;



export class TabBar extends React.Component {

    render() {
        const { index } = this.props;
        return(
            <ThemeProvider theme={theme}>
        
        <Tabs value={index} fullWidth onChange={(event, value) => this.props.handleIndexChange(event, value)}>
          <Tab label={<IconSVG src={hint} alt="Logo" />} />

            <Tab label={<IconSVG src={menu} alt="Logo" />} />

          <Tab label={<IconSVG src={people} alt="Logo" />} />

          <Tab label={<IconSVG src={chapter} alt="Logo" />} />
        </Tabs>
        </ThemeProvider>
        );
    }

}

export class TabContent extends React.Component {
    
    constructor(props) {
    super(props);
    }

    render() {
        const { index, quests, rerenderParentCallback} = this.props;
        return(
            <TabContentStyle>
    <SwipeableViews index={index} onChangeIndex={(index) => this.props.handleChangeIndex(index)}>
        <TabContentStyle>
            <Terrene_H2>Collected Clues</Terrene_H2>
            <ClueList quests={quests}/>

          </TabContentStyle>

          <TabContentStyle>
            <Terrene_H2>Mission Log</Terrene_H2>
            <QuestList quests={quests} rerenderParentCallback={rerenderParentCallback}/>
          </TabContentStyle>
          
          <TabContentStyle>
            <Terrene_H2>Team Members</Terrene_H2>
            <TeamList/>

          </TabContentStyle>
          
          <TabContentStyle>
            <Terrene_H2>Story Summary</Terrene_H2>
            <StoryList trigger={this.props.trigger} setStory={this.props.setStory} />

          </TabContentStyle>

        </SwipeableViews>
        </TabContentStyle>
        );
    }

}



