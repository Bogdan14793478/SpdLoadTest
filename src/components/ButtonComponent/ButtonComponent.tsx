import React from "react";
import { ButtonContainer, IconStyle, SpanText } from "./styles";
import { ButtonComponentProps } from "./types";

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  children,
  icon,
  onClick,
  ...props
}) => {
  return (
    <ButtonContainer {...props} onClick={onClick}>
      {icon && <IconStyle src={icon} alt="" />}
      {children && <SpanText>{children}</SpanText>}
    </ButtonContainer>
  );
};
