import styled from "styled-components";

// width: 100vw;
export const HomeContainer = styled.div`
  position: relative;
  box-sizing: border-box;
`;

export const PositionNav = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
`;

export const TextParagraph = styled.p`
  position: absolute;
  font-weight: 800;
  font-size: 48px;
  line-height: 58px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  left: 15%;
  top: 25%;
  color: #fff;
  letter-spacing: 10px;
  font-family: "Syne";
`;

export const TextParagraphBig = styled(TextParagraph)`
  font-size: 310px;
  line-height: 372px;
  top: 7%;
  left: 20%;
`;

export const TextAndArrow = styled.div`
  display: flex;
  position: absolute;
  bottom: 12px;
  left: 43%;
  align-items: center;
`;

export const TextParagraphLato = styled.p`
  font-weight: 300;
  font-size: 32px;
  line-height: 38px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ArrowDown = styled.img``;

export const Field = styled.div`
  height: 84px;
  content: "";
`;

export const SecondContainer = styled.div`
  padding: 0 62px;
`;

export const BoxTitleAndArrow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextParagraphTours = styled.p`
  font-family: "Syne";
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;
  color: #1e1e1e;
`;
