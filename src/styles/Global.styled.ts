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

        &:focus-visible {
            outline: 2px solid ${theme.colors.accent};
        }

        &::selection {
            background-color: ${theme.colors.accent};
            color: ${theme.colors.font};
        }
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
        padding: 100px 0;

        @media ${theme.media.mobile} {
            padding: 80px 0;
        }
    }

    section[id="home"] {

        @media ${theme.media.mobile} {
            padding: 100px 0 80px;
        }
    }
    //
    // section[id="skills"] h2{
    //     margin-bottom: 50px;
    // }

    section:nth-child(2n) {
        background-color: ${theme.colors.primaryBg};
    }

    section:nth-child(2n + 1) {
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