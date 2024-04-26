import React from 'react';
import {Logo} from "../../components/Logo/Logo";
import {Menu} from "../../components/Menu/Menu";
import {SocialIconLinks} from "../../components/SocialIconLinks/SocialIconLinks";
import styled from "styled-components";
import {FlexBoxWrapper} from "../../components/FlexBoxWrapper";
import {socialIconsId} from "../../index";
import {menuNavigationItems} from "../../index";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo/>
      <FlexBoxWrapper align={'center'}>
        <Menu itemsNames={menuNavigationItems}/>
        <SocialIconLinks socialIconsId={socialIconsId}/>
      </FlexBoxWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1f1f20;;
`