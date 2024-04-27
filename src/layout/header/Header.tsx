import React from 'react';
import {Logo} from "../../components/Logo/Logo";
import {TabMenu} from "../sections/works/TabMenu/TabMenu";
import {SocialIconLinks} from "../../components/SocialIconLinks/SocialIconLinks";
import styled from "styled-components";
import {FlexBoxWrapper} from "../../components/FlexBoxWrapper";
import {socialIconsId} from "../../index";
import {menuNavigationItems} from "../../index";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";
import {HeaderMenu} from "./HeaderMenu/HeaderMenu";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexBoxWrapper justify="space-between" align="center">
          <Logo/>
          <FlexBoxWrapper align={'center'} justify={"flex-end"}>
            <HeaderMenu itemsNames={menuNavigationItems}/>
            <SocialIconLinks socialIconsId={socialIconsId}/>
          </FlexBoxWrapper>
        </FlexBoxWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.primaryBg};
    padding: 20px 0;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
`