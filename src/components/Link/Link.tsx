import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type LinkPropsType = {
  href: string,
  children?: string,
}

export const Link = (props: LinkPropsType) => {
  return (
    <StyledLink href={props.href}>{props.children}</StyledLink>
  );
};

const StyledLink = styled.a`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    padding: 10px;

    position: relative;
    z-index: 1;

    &:hover{
        &::before{
            height: 10px;
        }
    }

    &::before{
        display: inline-block;
        content: "";
        width: 100%;
        height: 0;
        background-color: ${theme.colors.accent};

        position: absolute;
        bottom: 5px;
        left: 0;
        z-index: -1;
    }
`