import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: inherit;
    }
    *{
        scroll-behavior: smooth;
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
    }

    a{
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
    button{
        background-color: unset;
        border: none;
    }

    .josefin-sans {
        font-family: "Josefin Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: bold /regular/ semibold;
        font-style: normal;
    }


    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    .App {
        position: relative;

    }

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
`