import { FC } from 'react';
import styled from 'styled-components';

import { HorizontalList } from './components/Flex';

const ContentWrapper = styled.div`
    width: 900px;
    max-width: calc(100vw - 2rem);
    margin: 0 1rem;
    padding-bottom: 10vh;
    > * {
        margin-bottom: 2rem;
    }
`;

export const HomePage: FC = () => {
    return (
        <ContentWrapper>
            <p>Under Construction...</p>
            <a href="/web3-auth">Passwordless Authentication with web3</a>
        </ContentWrapper>
    );
};
