import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import { NavBar } from './components/Navbar';
import { HomePage } from './Home';

const GlobalStyle = createGlobalStyle`
  html, body {
    background: var(--color-bg);
    color: var(--color-main);
    font-family: 'Hack', monospace;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }
  html {
    overflow-y: overlay;
  }
  * {
    box-sizing: border-box;
  }
  :root {
    --font-fallback: monospace;
    --font-body: 'Hack', var(--font-fallback);
    --font-mono: 'Hack', var(--font-fallback);

    --user-font-scale: 1rem - 16px;
    --max-width: calc(100% - 2rem);
    font-size: 18px;

    --color-gray: #2d2e2f;
    --color-white: #fff;
    --color-text-white: #c8c8c8;
    --color-offwhite: #686868;
    --color-almost-black: #121212;
    --color-black: #000;
    --color-pink: #ff43ac;
    --color-pink-alt: #ff81ba;
    --color-blue: #299bfd;
    --color-blue-alt: #59b8ff;
    --color-red: #ff5459;
    --color-yellow: #ffb85e;
    --color-yellow-alt: #ffcd8c;
    --color-green: #8dffde;

    --theme-round: 4px;

    background: transparent;
  }
  :root {
    font-size: 18px;
    --theme-bg: var(--color-almost-black);
    --theme-text-main: var(--color-white);
    --theme-text-post: var(--color-text-white);
    --theme-text-alt: var(--color-offwhite);
    --theme-link: var(--color-blue);
    --theme-code-border: 1px solid white;
    --theme-code-inline: var(--color-pink);
    --theme-person-link: var(--color-pink);
    --theme-person-bg: var(--color-almost-black);
    --theme-person-border: var(--color-white);
    --theme-person-highlight: rgba(255,255,255,0.1);
    --theme-line-color: #686868;

    --theme-bg-hover: var(--color-offwhite);
    --theme-bg-focus: var(--color-offwhite);

    --color-bg: var(--theme-bg);
    --color-main: var(--theme-text-main);
    --color-alt: var(--theme-text-alt);
  }
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  @media print {
    html, body {
      --color-bg: white;
      --color-main: #2d2e2f;
      --color-alt: #6c6c6c;
    }
    :root {
      font-size: 18px;
    }
  }
`;

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    flex-grow: 1;
`;

export const App = () => {
    useEffect(() => {
        if (
            location.protocol !== 'https:' &&
            !(
                location.href.includes('localhost') ||
                location.href.includes('127.0.0.1')
            )
        ) {
            location.replace(
                `https:${location.href.slice(location.protocol.length)}`
            );
        }
    }, [0]);

    return (
        <Router>
            <GlobalStyle />
            <NavBar />

            <luc-wrapper>
                <Center className="content">
                    <HomePage />
                </Center>
            </luc-wrapper>
        </Router>
    );
};
