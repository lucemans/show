import { FC } from 'react';
import { Globe } from 'react-feather';
import styled from 'styled-components';

const Wrapper = styled.a``;

const Button = styled.button`
    background: var(--theme-bg);
    border: 1px solid #686868;
    color: white;
    outline: none;
    padding: 0;
    padding: 0.5rem;
    border-radius: 0.3rem;
    cursor: pointer;
    &:hover {
        color: black;
        background: #eee;
    }
`;

export const WebsiteButton: FC<{ link: string }> = ({ link }) => {
    return (
        <Wrapper href={link} target="_blank">
            <Button>
                <Globe />
            </Button>
        </Wrapper>
    );
};
