import React from 'react';
import styled from "styled-components";

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
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    padding: 5px;

    &::after {
        margin-top: -3px;
        align-self: center;
        content: "";
        display: inline-block;
        width: 80%;
        height: 10px;
        background-color: #7572d5;
    }
`