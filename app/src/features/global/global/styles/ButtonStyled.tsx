import styled from "styled-components";

type ButtonProps = {
  variant?: string;
  disabled?: boolean;
};

export const ButtonStyled = styled.button<ButtonProps>`
  background-color: ${({ disabled, theme }) => {
    if (disabled) return theme.backgroundColor.secondary;
    return "inherit";
  }};

  color: ${({ disabled, theme }) => {
    if (disabled) return theme.color.light;
    return theme.color.secondary;
  }};

  border: ${({ variant, disabled, theme }) => {
    if (disabled) return "none";
    if (variant === "outline") return "2px solid " + theme.color.secondary;
    return "none";
  }};

  font-weight: ${({ variant }) => {
    if (variant === "basic" || !variant) return "bolder";
    return;
  }};

  border-radius: 5px;
  padding: 16px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 16px;
  transition: 0.2s all ease-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ variant, disabled, theme }) => {
      if (disabled) return theme.backgroundColor.secondary;
      if (variant === "outline") return theme.color.primary;
      return theme.backgroundColor.secondary;
    }};
    color: ${({ theme }) => theme.color.light};
  }

  &:active {
    transform: ${({ disabled }) => {
      if (disabled) return null;
      return "scale(0.95)";
    }};
  }
`;
