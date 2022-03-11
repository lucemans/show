import { FC } from 'react';
import styled from 'styled-components';

import { Presentation } from './Presentation';

type PresentationType = {
    name: string;
    image: string;
    placeholder: string;
};

const Presentations: PresentationType[] = [
    {
        name: '',
        image: '',
        placeholder: '',
    },
];

const Wrapper = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
`;

export const PresentationGrid: FC = () => {
    return (
        <Wrapper>
            <Presentation />
            <Presentation />
            <Presentation />
            <Presentation />
        </Wrapper>
    );
};
