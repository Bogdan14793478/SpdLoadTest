import React, { useEffect } from "react";
import SlickSwitcher from "../../components/SlickSlider/SlickSlider";
import first from "../../assets/first.svg";
import second from "../../assets/second.svg";
import third from "../../assets/third.svg";
import firstSm from "../../assets/firstSm.svg";
import secondSm from "../../assets/secondSm.svg";
import thirdSm from "../../assets/thirdSm.svg";
import Arrow from "../../assets/arrow.svg";
import {
  ArrowDown,
  BoxTitleAndArrow,
  Field,
  HomeContainer,
  PositionNav,
  SecondContainer,
  TextAndArrow,
  TextContainer,
  TextParagraph,
  TextParagraphBig,
  TextParagraphLato,
  TextParagraphTours,
} from "./styles";
import { Navbar } from "../../components/Navbar/Navbar";
import { SimpleSlider } from "../../components/SlickSliderCarousel/SlickSlider";
import { useRockets } from "../../hooks/card";
const imgInfo: string[] = [third, second, first];
const imgInfoTwo: string[] = [firstSm, secondSm, thirdSm, firstSm];

export const HomePage = () => {
  const rocketsRequest = useRockets();

  return (
    <>
      <HomeContainer>
        <PositionNav>
          <Navbar />
        </PositionNav>

        {/* <SlickSwitcher imgInfo={imgInfo} /> */}
        {/* <TextParagraph>The space is waiting for</TextParagraph>
        <TextParagraphBig>You</TextParagraphBig> */}
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

          <TextParagraphTours>Popular tours</TextParagraphTours>
        </BoxTitleAndArrow>

        <SimpleSlider data={rocketsRequest} img={imgInfoTwo} />
      </SecondContainer>
      <Field></Field>
    </>
  );
};
