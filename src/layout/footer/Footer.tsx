import React from 'react';
import styled from "styled-components";
import {SocialIconLinks} from "../../components/SocialIconLinks/SocialIconLinks";
import {socialIconsId} from "../../index";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";
import {FlexBoxWrapper} from "../../components/FlexBoxWrapper";
import {font} from "../../styles/Common";

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
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`
const Title = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmin: 16, Fmax: 22})};
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