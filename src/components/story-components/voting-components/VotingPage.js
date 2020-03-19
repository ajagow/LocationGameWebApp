import styled from "styled-components";
import React from "react";
import { useState } from "react";

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import {
  Terrene_H1,
  Terrene_P,
} from "../../base_components/typography";

import { darkBlue, cream } from "../../base_components/colors";
import Square from "../../images/Square.png";
import { PrimaryButton } from "../../base_components/buttons";

const StoryCarouselWrapper = styled.div``;

const StoryImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 50px 0px 50px;
`;

const StoryImage = styled.img`
  width: 90%;
  margin: 5px;
`;

const StoryContent = styled.div`
  margin-top: 15px;
  padding: 8px;
  background: ${darkBlue};
  color: ${cream};
  text-align: center;
  height: 110px;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  position: absolute:
  bottom: 5px;
  justify-content: space-around;
`;

const ChapterTitle = styled(Terrene_H1)`
  color: white;
  padding: 40px 0px 0px 60px;
`;

export const StoryCarousel = props => {
  const { story, title } = props;

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    if (slide < story.length - 1) setSlide(slide + 1);
  };

  const prevSlide = () => {
    if (slide > 0) setSlide(slide - 1);
  };

  const slideContent = story[slide];

  return (
    //Title

    //Reminder of Clues

    //Description
    //Vote List
    <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />

    //Prev Next buttons
  );
};