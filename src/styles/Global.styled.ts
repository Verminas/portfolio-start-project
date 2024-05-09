import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: inherit;
        border: none;
    }

    * {
        scroll-behavior: smooth;
        scroll-margin: 40px;

        &:focus-visible {
            outline: 2px solid ${theme.colors.accent};
        }

        &::selection {
            background-color: ${theme.colors.accent};
            color: ${theme.colors.font};
        }
    }
    
    // style for scrollbar
    
    *::-webkit-scrollbar{
        width: 15px;
    }
    *::-webkit-scrollbar-track{
        background-color: ${theme.colors.primaryBg};
        box-shadow: 0 0 10px ${theme.colors.secondaryBg} inset;
    }
    *::-webkit-scrollbar-thumb{
        background-color: ${theme.colors.accent};
        border-radius: 50px;
        box-shadow: 0 0 30px ${theme.colors.primaryBg} inset;
        border: 2px solid ${theme.colors.primaryBg};
    }
    * {
        scrollbar-width: auto;
        scrollbar-color: ${theme.colors.accent} ${theme.colors.primaryBg};
    }

    html {
        overflow-x: hidden;
    }

    body {
        margin: 0;
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
        line-height: 1.2;
        
        min-width: 360px;

        @media (prefers-reduced-motion: reduce) {
            animation: none;
        }
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
        font-family: inherit;
        cursor: pointer;
        color: inherit;
        text-align: center;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    .App {
        position: relative;

    }

    section {
        position: relative;
        padding: 100px 0;

        @media ${theme.media.mobile} {
            padding: 80px 0;
        }
    }

    section[id="home"] {
        position: static;

        @media ${theme.media.mobile} {
            padding: 100px 0 80px;
        }
    }
    section[id="works"]{

        @media ${theme.media.mobile} {
            h2 {
                margin-top: -15px;
            }
            
        }
    }

    section[id="slogan"]{
        position: static;

        @media ${theme.media.mobile} {
            h2 {
                line-height: 0.93;
            }
            div {
                gap: 37px;
            }
        }
    }

    section:nth-child(2n + 1) {
        background-color: ${theme.colors.primaryBg};
    }

    section:nth-child(2n) {
        background: ${theme.colors.secondaryBg};
    }

    svg {
        max-width: 50px;
        max-height: 50px;
        fill: ${theme.colors.accent};
    }

    h3 {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1px;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.4;
    }
`