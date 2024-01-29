import styled from "styled-components";
import { FC, ReactNode, CSSProperties } from "react";

type DivProps = {
  children: ReactNode;
  sx?: CSSProperties;
};

export const DivStyled = styled.div<DivProps>``;


export const Div: FC<DivProps> = ({
  children,
  sx,
}) => {
  return <DivStyled style={sx}>{children}</DivStyled>;
};
