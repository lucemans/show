import { FC } from 'react';
import styled from 'styled-components';

import { AllPesentations } from '../static/presentations';
import { Presentation } from './Presentation';

const Wrapper = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

export const PresentationGrid: FC = () => {
    return (
        <Wrapper>
            {AllPesentations.map((presentation) => (
                <Presentation presentation={presentation} />
            ))}
        </Wrapper>
    );
};
