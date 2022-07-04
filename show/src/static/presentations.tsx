import { FC } from 'react';

import { ImageButton } from '../components/ImageButton';
import { WebsiteButton } from '../components/WebsiteButton';
import { YoutubeButton } from '../components/YoutubeButton';

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
        name: 'Terraform Zero to Hero',
        image: require('url:/show/assets/terraform-zero-hero.svg'),
        placeholder: 'L65N[,t7EGWXoOogj=of9:kC?1s:',
        links: [
            {
                component: () => <ImageButton link="/terraform" />,
            },
        ],
        icons: [],
    },
    {
        name: 'Blockchain Zero to Hero',
        image: require('url:/show/assets/blockchain-zero-hero.svg'),
        placeholder: 'TB8piVj@0hxCfQR+0Naz~99|j@$y',
        links: [
            {
                component: () => <ImageButton link="/blockchain" />,
            },
            {
                component: () => (
                    <YoutubeButton link="https://www.youtube.com/watch?v=2uU5_f3shQE" />
                ),
            },
        ],
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
            {
                component: () => (
                    <WebsiteButton link="https://reactlive.nl/?ref=luc.show" />
                ),
            },
            {
                component: () => (
                    <YoutubeButton link="https://www.youtube.com/watch?v=gcsunutwMxU" />
                ),
            },
        ],
        icons: [],
    },
];
