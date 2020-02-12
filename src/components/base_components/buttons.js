import styled from "styled-components";
import React from 'react';


export const PrimaryButtonStyle = styled.a`
    width: 100px;
    height: 50px;
    border: 1px solid black;

`;


export class PrimaryButton extends React.Component {
  render() {
    const { title } = this.props;
    return (
        <PrimaryButtonStyle onClick={() => this.props.onClickFnc()}>{title}</PrimaryButtonStyle>
    )
  }
}




