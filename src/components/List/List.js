import styled from "styled-components";
import React from 'react';


export const ListStyle = styled.a`
    width: 100px;
    height: 50px;
    border: 1px solid black;

`;


export class List extends React.Component {
  render() {
    const { title } = this.props;
    return (
        <PrimaryButtonStyle onClick={() => this.props.onClickFnc()}>{title}</PrimaryButtonStyle>
    )
  }
}




