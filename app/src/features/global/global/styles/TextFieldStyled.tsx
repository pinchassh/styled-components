import { CSSProperties, ChangeEventHandler, FC, ReactNode } from 'react';
import styled from 'styled-components';
import { TextFieldProps } from '../interfices/TextFieldProps';



const TextFieldStyle = styled.div<TextFieldProps>`
  display: flex;
  flex-direction: ${(prop) => prop.direction || "column"} ;
  margin-bottom: ${({ fullWidth }) => (fullWidth ? '16px' : '8px')};
  input {

  /* background-color: inherit; */
    /* color: #010101; */
    /* border: 2px solid #010101; */
    /* border-radius: 5px; */
    /* padding: 16px; */
    /* text-align: center; */
    /* text-transform: uppercase; */
    /* text-decoration: none; */
    /* font-size: 16px; */
    /* transition: 0.2s all ease-out; */
    /* cursor: pointer; */
    /* padding: 8px; */
    font-size: 16px;
    border-radius: 8px;
    /* outline: none; */
    /* transition: border-color 0.3s; */
    /* display: -webkit-inline-box; */
    /* display: -webkit-inline-flex; */
    /* display: -ms-inline-flexbox; */
    /* display: inline-flex; */
    /* -webkit-flex-direction: column; */
    /* -ms-flex-direction: column; */
    /* position: relative; */
    /* min-width: 0; */
    /* margin: 0; */
    /* border: 0; */
    /* vertical-align: top; */
    padding: 12px;
    margin: 4px auto;
    /* font: inherit; */
    letter-spacing: inherit;
    box-sizing: content-box;

        /* display: "flex"; */
    /* flex-direction: "column"; */
   /* margin-bottom: "16px"; */
    /* padding: "8px"; */
    /* border: "1px solid #121212"; */
    /* outline: "none"; */
  /* transition: "border-color 0.3s"; */

    /* &:focus { */
      /* border-color: #007bff; */
    /* } */
  }
`;

export const TextFieldContainer: FC<TextFieldProps> = ({ sx, children, placeholder }) => {
    return (
        <TextFieldStyle   >
            <input placeholder={placeholder} />
            {children}
        </TextFieldStyle>
    );
};
