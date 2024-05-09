import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";

export const Link = styled.a<{ active?: boolean }>`
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 1px;
        text-align: center;
        text-transform: uppercase;
        padding: 10px;

        position: relative;
        z-index: 1;

        &:hover {
                &::before {
                        height: 10px;
                }
        }

        &::before {
                display: inline-block;
                content: "";
                width: 100%;
                height: 0;
                background-color: ${theme.colors.accent};

                position: absolute;
                bottom: 5px;
                left: 0;
                z-index: -1;
            transition: ${theme.animations.transitions.average};

                ${props => props.active && css<{ active?: boolean }>`
                        height: 10px;
                `}
        }

        @media ${theme.media.mobile} {
                padding: 5px;
        }
`