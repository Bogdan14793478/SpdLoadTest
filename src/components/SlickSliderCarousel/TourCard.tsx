import React from "react";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
// import Heart from "../../assets/heart";

import {
  ButtonContainer,
  CardContainer,
  DescriptionStyle,
  ImgStyle,
  NameStyle,
} from "./styles";
import { useAddRocketToFavorite } from "../../hooks/card";
import { rocketsState, RocketsType } from "../../state/card";
import { useRecoilValue } from "recoil";

interface TourCardProps {
  item: RocketsType;
  img?: string;
  icon: string;
  background?: string;
  type: string;
}

const TourCard: React.FC<TourCardProps> = ({
  item,
  img,
  icon,
  background,
  type,
}) => {
  const rockets = useRecoilValue(rocketsState);

  const { addItem, removeItem } = useAddRocketToFavorite();

  const addToFavorite = () => {
    addItem(item);
  };

  const removeChooseTour = () => {
    removeItem(item.id);
  };

  const stateHasId = rockets.find((el) => el.id === item.id);
  const chooseBackgroundColorBox = stateHasId ? "#DD377D" : "#ECECEC";
  return (
    <CardContainer>
      <ImgStyle src={img} alt="" />
      <NameStyle>{item.name}</NameStyle>
      <DescriptionStyle>{item.description}</DescriptionStyle>
      <ButtonContainer>
        <ButtonComponent
          backgroundColor="#D3EAFF"
          variant="tertiary"
          onClick={() => {}}
        >
          Buy
        </ButtonComponent>
        <ButtonComponent
          variant="secondary"
          backgroundColor={background ? "#ECECEC" : chooseBackgroundColorBox}
          onClick={type === "add" ? addToFavorite : removeChooseTour}
        >
          <ImgStyle src={icon} alt="" />
        </ButtonComponent>
      </ButtonContainer>
    </CardContainer>
  );
};

export default TourCard;
