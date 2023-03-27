import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  width: 411px;
  border: 1px solid #d3eaff;
`;

export const ImgStyle = styled.img``;

export const NameStyle = styled.div`
  font-family: "Syne", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  text-transform: uppercase;
  color: #1e1e1e;
  margin-top: 32px;
`;

export const DescriptionStyle = styled.p`
  font-family: "Lato";
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  text-align: center;
  color: #556b84;
  margin-bottom: 48px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
`;

export const ContainerArrowRight = styled.div`
  width: 43px;
  height: 43px;
  background: #ececec;
  position: absolute;
  top: -100px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerArrowLeft = styled(ContainerArrowRight)`
  right: 60px;
`;
