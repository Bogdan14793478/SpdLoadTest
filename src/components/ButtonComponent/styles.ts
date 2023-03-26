import styled, { css } from "styled-components";
import { ButtonComponentProps } from "./types";

const publicQuaternaryStyles = css`
  font-family: "Lato";
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #556b84;
`;

const publicTertiaryStyles = css`
  padding: 12px 112px;
  font-family: "Syne";
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
`;

const publicSecondaryStyles = css`
  padding: 17px;
  margin-right: 12px;
`;

const publicPrimaryStyles = css`
  background-color: #d3eaff;
  text-transform: uppercase;
  padding: 12px 25px;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  position: relative;
  &:after {
    content: "";
    background: #90ee90;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }
  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
`;

export const ButtonContainer = styled.button<ButtonComponentProps>`
  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return publicPrimaryStyles;
      case "secondary":
        return publicSecondaryStyles;
      case "tertiary":
        return publicTertiaryStyles;
      case "quaternary":
        return publicQuaternaryStyles;
      default:
        return publicPrimaryStyles;
    }
  }};
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#ECECEC"};
  color: #000;
  position: relative;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  overflow: hidden;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: "Syne", sans-serif;
`;

export const IconStyle = styled.img``;

export const SpanText = styled.span``;

//   padding: ${(props) => (props.padding ? props.padding : "10px 0")};
