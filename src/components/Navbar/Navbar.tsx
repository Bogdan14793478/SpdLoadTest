import React, { useState } from "react";
import {
  ContainerButton,
  ImageStyle,
  LinkContainer,
  LinkStyle,
  NavbarContainer,
} from "./styles";
import Logo from "../../assets/logo.svg";
import { useNavigate } from "react-router";
import Heart from "../../assets/heart";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";

export const Navbar = () => {
  const [activeHeart, setActiveHeart] = useState<boolean>(false);
  const navigation = useNavigate();
  const redirectToHome = (): void => {
    setActiveHeart(false);
    navigation("/");
  };

  const redirectToFavorite = (): void => {
    setActiveHeart(true);
    navigation("/favorite");
  };

  const chooseBackgroundColorHeart = activeHeart ? "#fff" : "#1E1E1E";
  const chooseBackgroundColorBox = activeHeart ? "#DD377D" : "#ECECEC";

  return (
    <NavbarContainer>
      <ImageStyle onClick={redirectToHome} src={Logo} alt="" />
      <LinkContainer>
        <LinkStyle onClick={redirectToHome}>Home</LinkStyle>
        <LinkStyle>Tours</LinkStyle>
        <LinkStyle>About</LinkStyle>
        <LinkStyle>Help</LinkStyle>
      </LinkContainer>
      <ContainerButton>
        <ButtonComponent
          variant="secondary"
          backgroundColor={chooseBackgroundColorBox}
          onClick={redirectToFavorite}
        >
          <Heart fill={chooseBackgroundColorHeart} />
        </ButtonComponent>
        <ButtonComponent
          backgroundColor="#D3EAFF"
          variant="primary"
          onClick={redirectToFavorite}
        >
          Sign in
        </ButtonComponent>
      </ContainerButton>
    </NavbarContainer>
  );
};
