import styled from "styled-components";
import { FC, ReactNode, CSSProperties } from "react";



// export const FormContainer = styled.form`
//   // Add any styling for the form container here
// `;




type FormProps = {
    children?: ReactNode;
    onSubmit?: () => void;
    sx?: CSSProperties;
};

export const FormContainer = styled.form<FormProps>``;


export const Form: FC<FormProps> = ({
    children,
    sx
}) => {
    return (
        <FormContainer style={sx} >
            {children}
        </FormContainer>
    );
};
