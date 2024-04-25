import React from 'react';
import {Logo} from "../../components/Logo/Logo";
import {Menu} from "../../components/Menu/Menu";
import {SocialMedia} from "../../components/SocialMedia/SocialMedia";
import styled from "styled-components";
import {StyledFlexBoxWrapper} from "../../components/StyledFlexBoxWrapper";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo/>
      <StyledFlexBoxWrapper align={'center'}>
        <Menu/>
        <SocialMedia/>
      </StyledFlexBoxWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`