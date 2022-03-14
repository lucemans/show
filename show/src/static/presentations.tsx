import { FC } from 'react';

import { ImageButton } from '../components/ImageButton';

export type LinkType = {
    component: FC;
};

export type IconType = {
    label: string;
    src: string;
};

export type PresentationType = {
    name: string;
    image: string;
    placeholder: string;
    links: LinkType[];
    icons: IconType[];
};

export const AllPesentations: PresentationType[] = [
    {
        name: 'Blockchain Zero to Hero',
        image: require('url:/show/assets/blockchain-zero-hero.svg'),
        placeholder: 'TB8piVj@0hxCfQR+0Naz~99|j@$y',
        links: [],
        icons: [],
    },
    {
        name: 'Passwordless Authentication with Web3',
        image: require('url:/show/assets/passwordless-web3.svg'),
        placeholder: 'T97]_0fQ0]+zj[K00]a{^U2-fQ[E',
        links: [
            {
                component: () => <ImageButton link="/web3-auth" />,
            },
        ],
        icons: [],
    },
];
