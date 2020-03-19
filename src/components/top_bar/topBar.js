import styled from "styled-components";
import React, { useRef } from "react";
import { Terrene_H1 } from "../base_components/typography";
import terrene_wordmark from "../../../public/icons/terrene_wordmark.svg";

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

export const LogoutStyle = styled.p`
  position: absolute;
  left: 10px;
`;

const WordmarkStyle = styled.img`
  margin: 0;
`;

const TopBar = props => {
  if (props.showLogout) {
    return (
      <TopBarStyle>
        <LogoutStyle
          onClick={() => {
            document.cookie = "visit=false";
            document.cookie = "firstTime=true";
            window.location.replace(`/`);
          }}
        >
          logout
        </LogoutStyle>
        <WordmarkStyle src={terrene_wordmark} />
      </TopBarStyle>
    );
  } else {
    return (
      <TopBarStyle>
        <WordmarkStyle src={terrene_wordmark} />
      </TopBarStyle>
    );
  }
};

export default TopBar;
