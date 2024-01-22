import styled from "styled-components";
import { FC, ReactNode, CSSProperties } from "react";



// export const FormContainer = styled.form`
//   // Add any styling for the form container here
// `;




type FormStyledProps = {};

export const FormContainer = styled.p<FormStyledProps>``;

type FormProps = {
    children: ReactNode;
    component?: string;
    sx?: CSSProperties;
};

export const form: FC<FormProps> = ({
    children,
    component,
    sx,
}) => {
    return (
        <FormContainer style={sx} as={component}>
            {children}
        </FormContainer>
    );
};
