import React from "react";
import { useRecoilValue } from "recoil";
import { Navbar } from "../../components/Navbar/Navbar";
import { rocketsState } from "../../state/card";
import first from "../../assets/first.svg";
import firstSm from "../../assets/firstSm.svg";
import secondSm from "../../assets/secondSm.svg";
import thirdSm from "../../assets/thirdSm.svg";
import Remove from "../../assets/remove.svg";

import {
  ActiveField,
  CardStyle,
  FavoriteContainer,
  ImgStyle,
  PositionBtn,
  PositionNav,
  WrapperCard,
} from "./styles";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";
import TourCard from "../../components/SlickSliderCarousel/TourCard";
import { useAddRocketToFavorite } from "../../hooks/card";

const imgInfoTwo: string[] = [firstSm, secondSm, thirdSm, firstSm];

export const FavoritePage = () => {
  const { removeAll } = useAddRocketToFavorite();

  const rockets = useRecoilValue(rocketsState);
  return (
    <>
      <FavoriteContainer>
        <PositionNav>
          <Navbar />
        </PositionNav>
        <ImgStyle src={first} alt="" />
        <ActiveField>
          <PositionBtn>
            <ButtonComponent
              backgroundColor="#fff"
              variant="quaternary"
              onClick={removeAll}
            >
              Clear All
            </ButtonComponent>
          </PositionBtn>
          <CardStyle>
            {rockets.map((el, i) => {
              return (
                <WrapperCard>
                  <TourCard
                    type="remove"
                    background="#ECECEC"
                    icon={Remove}
                    item={el}
                    img={imgInfoTwo[i]}
                  />
                </WrapperCard>
              );
            })}
          </CardStyle>
        </ActiveField>
      </FavoriteContainer>
    </>
  );
};