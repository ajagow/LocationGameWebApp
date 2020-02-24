import styled from "styled-components";
import React from 'react';
import { Terrene_H1 } from "../base_components/typography";
import terrene_wordmark from '../../../public/icons/terrene_wordmark.svg';

import { mediumBlue, darkBlue } from "../base_components/colors";


export const TopBarStyle = styled.div`
    width: 100vw;
    height: 50px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${mediumBlue};
    background-color: ${darkBlue};
    z-index: 1;
}`;

const WordmarkStyle = styled.img`
    margin: 0;
`;






export class TopBar extends React.Component {
  render() {
    return (
      <TopBarStyle>
          <WordmarkStyle src={terrene_wordmark}/>
      </TopBarStyle>
    )
  }
}




