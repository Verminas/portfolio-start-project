import React from 'react';
import {Logo} from "../../components/Logo/Logo";
import {Menu} from "../../components/Menu/Menu";
import {SocialMedia} from "../../components/SocialMedia/SocialMedia";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo/>
      <StyledNav>
        <Menu/>
        <SocialMedia/>
      </StyledNav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
`

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
`