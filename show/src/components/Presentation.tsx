import { FC } from 'react';
import { Blurhash } from 'react-blurhash';
import styled from 'styled-components';

import { PresentationType } from '../static/presentations';
import { BipolarImage } from './BipolarImage';
import { Table } from './Table';

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

const CommingSoon = styled.div`
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

export const Presentation: FC<{ presentation: PresentationType }> = ({
    presentation,
}) => {
    return (
        <Table
            header={presentation.name}
            children={() => [
                <Wrapper>
                    <BipolarImage
                        src={presentation.image}
                        placeholder={
                            <Blurhash
                                hash={presentation.placeholder}
                                width="100%"
                                height="100%"
                                punch={1}
                            />
                        }
                        width="100%"
                        height="100%"
                    />
                    <HoverBlur>
                        {presentation.links.length === 0 ? (
                            <CommingSoon>Comming Soon...</CommingSoon>
                        ) : (
                            presentation.links.map((Link) => <Link.component />)
                        )}
                    </HoverBlur>
                </Wrapper>,
            ]}
        ></Table>
    );
};
