import styled from "styled-components";
import { FC, ReactNode, CSSProperties } from "react";

type TypographyStyledProps = {};

export const TypographyStyled = styled.p<TypographyStyledProps>``;

type TypographyProps = {
  children: ReactNode;
  component?: string;
  sx?: CSSProperties;
};

export const Typography: FC<TypographyProps> = ({
  children,
  component,
  sx,
}) => {
  // If a specific component is provided, use it; otherwise, use TypographyStyled
  const Component = component || TypographyStyled;

  return <Component style={sx}>{children}</Component>;
};
