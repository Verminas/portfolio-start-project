import React from 'react';
import styled from "styled-components";
import {SocialIconLinks} from "../../components/SocialIconLinks/SocialIconLinks";
import {socialIconsId} from "../../index";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";
import {FlexBoxWrapper} from "../../components/FlexBoxWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexBoxWrapper direction="column" gap="30px" align="center" justify="center">
          <Title>Svetlana</Title>
          <SocialIconLinks socialIconsId={socialIconsId}/>
          <Copyright>&copy; 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
        </FlexBoxWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
    padding: 40px;
    background-color: ${theme.colors.primaryBg};
`
const Title = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 3px;
    text-align: center;
`

const Copyright = styled.span`
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    color: ${theme.colors.font};
    opacity: 50%;
`