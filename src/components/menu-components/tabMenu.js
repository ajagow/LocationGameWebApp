import React from 'react';
import styled from "styled-components";

import { darkBlue, white } from '../base_components/colors';
import { IconSVG } from '../base_components/images';
import { MenuSliderStyle } from './menuSlide';

import { QuestList } from '../quest-components/QuestList';

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
            backgroundColor: `${white}`
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
    width: 100%;
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

    render() {
        const { index } = this.props;
        return(
            <TabContentStyle>
    <SwipeableViews index={index} onChangeIndex={(index) => this.props.handleChangeIndex(index)}>
          <div>hint content</div>
          <div>
            <QuestList/>
          </div>
          <div>team content</div>
          <div>chapter content</div>
        </SwipeableViews>
        </TabContentStyle>
        );
    }

}



