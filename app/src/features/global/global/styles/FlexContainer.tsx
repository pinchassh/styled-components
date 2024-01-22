import { FC, ReactNode } from 'react';
import styled from 'styled-components';

type FlexProps = {
    children: ReactNode;
    justify?: string;
    direction?: string;
    alignItems?:string
};

export const FlexStyleContainer = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) => props.justify || 'flex-start'};
  flex-direction: ${(props) => props.direction || 'row'};
`;

export const FlexContainer: FC<FlexProps> = ({ justify, direction, children ,alignItems}) => {
    return (
        <FlexStyleContainer justify={justify} direction={direction} alignItems={alignItems}>
            {children}
        </FlexStyleContainer>
    );
};
