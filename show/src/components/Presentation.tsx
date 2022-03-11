import { FC } from 'react';
import { Blurhash } from 'react-blurhash';
import { Image } from 'react-feather';
import styled from 'styled-components';
import presentation from 'url:/show/assets/blockchain-zero-hero.png';

import { BipolarImage } from './BipolarImage';

const Wrapper = styled.div`
    flex: 1;
    aspect-ratio: 16 / 9;
    position: relative;
    font-size: 0; // Lol why does this fix the issue
`;

const HoverBlur = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: 250ms;
    background: rgba(255, 255, 255, 0);
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    > * {
        visibility: hidden;
    }
    &:hover {
        background: rgba(255, 255, 255, 0.07);
        > * {
            visibility: visible;
        }
    }
`;

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

import { Table } from './Table';

export const Presentation: FC = () => {
    return (
        <Table
            header="Presentation"
            children={() => [
                <Wrapper>
                    <BipolarImage
                        src={presentation}
                        placeholder={
                            <Blurhash
                                hash="|D8piVj@0#WWoLoJ%1j[WBs+fQR+j@ayazoJf6j[0haz^ioKbGa#Iqf6ofEQj@xVWWo2oJR-bHjY}?j@9vazfRjt$%j[WB=sazIuoKWVWXxDjZf+EOfQ%0a|oLj@Nba|f6ERj@$yWWoLoJNdbHe.s+azWYoKWVa#oJjZj]"
                                width="100%"
                                height="100%"
                                punch={1}
                            />
                        }
                        width="100%"
                        height="100%"
                    />
                    <HoverBlur>
                        <a href="/web3-auth">
                            <Button>
                                <Image />
                            </Button>
                        </a>
                    </HoverBlur>
                </Wrapper>,
            ]}
        ></Table>
    );
};
