import React from 'react';
import {Logo} from "../../components/Logo/Logo";
import {Menu} from "../../components/Menu/Menu";
import {SocialMedia} from "../../components/SocialMedia/SocialMedia";
import styled from "styled-components";
import {FlexBoxWrapper} from "../../components/FlexBoxWrapper";

const menuNavigationItems = ['Home', 'Skills', 'Works', 'Testimony', 'Contact' ];

export const Header = () => {
  return (
    <StyledHeader>
      <Logo/>
      <FlexBoxWrapper align={'center'}>
        <Menu itemsNames={menuNavigationItems}/>
        <SocialMedia/>
      </FlexBoxWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`