import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { Terrene_H1, Terrene_P } from "../base_components/typography";
import { darkBlue, cream } from "../base_components/colors";
import Square from "../../images/Square.png";
import { PrimaryButton } from "../base_components/buttons";

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
  const { story, title, id, isFirstTime } = props;

  const imgPath = isFirstTime ? "../storyImages" : "storyImages";

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    if (slide < story.length - 1) setSlide(slide + 1);
  };

  const prevSlide = () => {
    if (slide > 0) setSlide(slide - 1);
  };

  const slideContent = story[slide];

  return (
    <StoryCarouselWrapper>
      <ChapterTitle>{id}</ChapterTitle>
      <StoryImageWrapper>
        <StoryImage
          src={
            slideContent && slideContent.image !== ""
              ? `${imgPath}/${slideContent.image}`
              : Square
          }
        />
      </StoryImageWrapper>
      <StoryContent>
        <Terrene_P>{slideContent ? slideContent.text : ""}</Terrene_P>
      </StoryContent>
      <ButtonsWrapper>
        {slide > 0 ? (
          <PrimaryButton onClickFnc={() => prevSlide()} title="Prev" />
        ) : null}
        {slide < story.length - 1 ? (
          <PrimaryButton onClickFnc={() => nextSlide()} title="Next" />
        ) :  //TODO: change check to if is deliberation TYPE of story
          (id == 2 ? <PrimaryButton onClickFnc={() => nextSlide()} title="Vote"/> : null)}}
      </ButtonsWrapper>
    </StoryCarouselWrapper>
  );
};
