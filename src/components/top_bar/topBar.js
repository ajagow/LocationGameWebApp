import styled from "styled-components";
import React from 'react';
import { Terrene_H1 } from "../base_components/typography";
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
}






`;


export class TopBar extends React.Component {
  render() {
    return (
      <TopBarStyle>
          <Terrene_H1>Terrene</Terrene_H1>
      </TopBarStyle>
    )
  }
}




