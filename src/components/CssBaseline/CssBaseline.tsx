// based on https://hankchizljaw.com/wrote/a-modern-css-reset/

import { CSSObject, createGlobalStyle } from 'styled-components';
import { CssBaselineProps } from './CssBaselineProps';

export const CssBaseline = createGlobalStyle<CssBaselineProps>`
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    color: ${props => props.theme.palette.text.primary};
    background-color: ${props => props.theme.palette.background.default};
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    ${props => props.theme.typography.body2 as CSSObject};
  }

  body, h1, h2, h3, h4, p, li, figure, figcaption, blockquote, dl, dd {
    margin: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
    display: block;
  }

  article > * + * {
    margin-top: 1em;
  }

  input, button, textarea, select {
    font: inherit;
  }

  // hover - The primary input mechanism can conveniently hover over elements.
  // fine - The primary input mechanism includes an accurate pointing device.
  @media only screen and (hover: hover) and (pointer: fine){
      ::-webkit-scrollbar {
          width: 12px;
          height: 12px;
          overflow: visible;
      }

      ::-webkit-scrollbar-button {
          width: 0;
          height: 0;
      }

      ::-webkit-scrollbar-corner {
          background: transparent;
      }

      ::-webkit-scrollbar-thumb {
          border: 1px solid transparent;
          padding: 100px 0 0;
          min-height: 28px;
          box-shadow: inset 1px 1px 0 rgba(0, 0, 0, .1), inset 0 -1px 0 rgba(0, 0, 0, .07);
          background-clip: padding-box;
          background-color: rgba(0, 0, 0, .2);
      }

      ::-webkit-scrollbar-track {
          border: solid transparent;
          border-width: 0 0 0 4px;
          background-clip: padding-box;
      }
  }
`;
