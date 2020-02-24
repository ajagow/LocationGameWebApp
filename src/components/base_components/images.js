import styled from "styled-components";
import React from 'react';


export const IconSVGStyle = styled.img`
    width: 24px;
    height: 24px;
    margin-bottom: 0px;
`;

const ClueImageStyle = styled.img`
  margin-top: 20px;
`;

export class ClueImage extends React.Component {
  render() {
    const { src } = this.props;
    return (
        <ClueImageStyle src={src} alt="Logo" />
    )
  }
}

export class IconSVG extends React.Component {
  render() {
    const { src } = this.props;
    return (
        <IconSVGStyle src={src} alt="Logo" />
    )
  }
}

