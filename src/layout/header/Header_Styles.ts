import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Header = styled.header`
    background-color: ${theme.colors.primaryBg};
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;

    @media ${theme.media.mobile} {
        padding: 24px 0;
    }
`

export const S = {
  Header,
}