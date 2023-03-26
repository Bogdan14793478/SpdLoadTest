import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  padding: 19px 60px;
  justify-content: space-between;
  background: rgba(30, 30, 30, 0.48);
`;

export const ImageStyle = styled.img``;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkStyle = styled.a`
  position: relative;
  color: #fff;
  font-size: 1.25rem;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  margin-right: 32px;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0;
    height: 3px;
    background-color: #fff;
  }
  &:hover:before {
    width: 100%;
  }
  &:before {
    transition: width 0.35s;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  max-height: 53px;
`;
