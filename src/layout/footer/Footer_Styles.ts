import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

const Footer = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`
const Title = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmin: 16, Fmax: 22})};
    letter-spacing: 3px;
    text-align: center;
`

const Copyright = styled.span`
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    color: ${theme.colors.font};
    opacity: 50%;
    
    @media ${theme.media.mobile} {
        margin-top: 10px;
    }
`

export const S = {
  Footer,
  Title,
  Copyright,
}