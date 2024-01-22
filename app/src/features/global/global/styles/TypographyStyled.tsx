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
  return (
    <TypographyStyled style={sx} as={component}>
      {children}
    </TypographyStyled>
  );
};
