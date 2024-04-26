import React from 'react';
import styled from "styled-components";
import {SocialIconLinks} from "../../components/SocialIconLinks/SocialIconLinks";
import {SectionTitle} from "../../components/SectionTitle/SectionTitle";
import {socialIconsId} from "../../index";

export const Footer = () => {
  return (
    <StyledFooter>
      <Title>Svetlana</Title>
      <SocialIconLinks socialIconsId={socialIconsId}/>
      <Copyright>&copy; 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    padding: 30px;
    background-color: #1f1f20;
`
const Title = styled(SectionTitle)`
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 0.14em;
    color: inherit;
`

const Copyright = styled.span``