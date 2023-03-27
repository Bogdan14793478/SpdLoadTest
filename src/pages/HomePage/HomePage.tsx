import React from "react";
import SlickSwitcher from "../../components/SlickSlider/SlickSlider";
import first from "../../assets/first.svg";
import second from "../../assets/second.svg";
import third from "../../assets/third.svg";

import Arrow from "../../assets/arrow.svg";
import {
  ArrowDown,
  BoxTitleAndArrow,
  Field,
  HomeContainer,
  SecondContainer,
  TextAndArrow,
  TextContainer,
  TextParagraph,
  TextParagraphBig,
  TextParagraphLato,
  TextParagraphTours,
} from "./styles";
import { SimpleSlider } from "../../components/SlickSliderCarousel/SlickSlider";
import { useRockets } from "../../hooks/card";
const imgInfo: string[] = [third, second, first];

export const HomePage = () => {
  const rocketsRequest = useRockets();

  return (
    <>
      <HomeContainer>
        <SlickSwitcher imgInfo={imgInfo} />
        <TextContainer>
          <TextParagraph>The space is waiting for</TextParagraph>
          <TextParagraphBig>You</TextParagraphBig>
        </TextContainer>
        <TextAndArrow>
          <TextParagraphLato>Explore tours</TextParagraphLato>
          <ArrowDown src={Arrow} alt=""></ArrowDown>
        </TextAndArrow>
      </HomeContainer>
      <Field></Field>
      <SecondContainer>
        <BoxTitleAndArrow>
          <TextParagraphTours>Popular tours</TextParagraphTours>
        </BoxTitleAndArrow>

        <SimpleSlider data={rocketsRequest} />
      </SecondContainer>
      <Field></Field>
    </>
  );
};
