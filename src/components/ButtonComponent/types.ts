type VariantBtn = "primary" | "secondary" | "tertiary" | "quaternary";

export interface ButtonComponentProps {
  icon?: string;
  children?: React.ReactNode | JSX.Element;
  onClick: () => void;
  variant: VariantBtn;
  backgroundColor?: string;
}
