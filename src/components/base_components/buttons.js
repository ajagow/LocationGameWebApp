import styled from "styled-components";
import React from "react";
import { red, darkBlue } from "./colors";

export const PrimaryButtonStyle = styled.span`
  width: 100px;
  height: 50px;
  border: 1px solid ${red};
  color: ${red};
  padding: 8px;
  border-radius: 8px;
  font-family: "DM Sans";
  font-weight: bold;
  font-size: 18px;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
`;

export class PrimaryButton extends React.Component {
  render() {
    const { title, openModalRef } = this.props;
    return (
      <PrimaryButtonStyle
        ref={openModalRef}
        onClick={() => this.props.onClickFnc()}
      >
        {title}
      </PrimaryButtonStyle>
    );
  }
}
