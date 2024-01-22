import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { FieldError } from 'react-hook-form';

type ErrorMessageStyle = {
    children: ReactNode | FieldError | string;
};

export const ErrorMessage = styled.div<ErrorMessageStyle>`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;

export const ErrorMessageContainer: FC<ErrorMessageStyle> = ({ children }) => {
    return typeof children === 'string' ? <ErrorMessage>{children}</ErrorMessage> : null
};
