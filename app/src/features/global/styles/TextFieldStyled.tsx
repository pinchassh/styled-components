import { CSSProperties, FC, ReactNode } from 'react';
import styled from 'styled-components';
// import { TextField } from '../interfices/TextFieldProps';


type TextFieldProp = {
  children?: ReactNode;
  sx?: CSSProperties;
  label?: string
  placeholder?: string
  ariaInvalid?: {}
};
const TextFieldStyle = styled.input<TextFieldProp>``;

export const TextField: FC<TextFieldProp> = ({ children, sx, label, placeholder, ariaInvalid }) => {
  return (
    <TextFieldStyle label={label} placeholder={placeholder} ariaInvalid={ariaInvalid}>
      <input style={sx} />
      {children}
    </TextFieldStyle>
  );
};
