import { FC } from 'react';
import { Image } from 'react-feather';
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

export const ImageButton: FC<{ link: string }> = ({ link }) => {
    return (
        <Wrapper href={link}>
            <Button>
                <Image />
            </Button>
        </Wrapper>
    );
};
