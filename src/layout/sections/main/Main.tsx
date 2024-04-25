import React from 'react';
import {StyledFlexBoxWrapper} from "../../../components/StyledFlexBoxWrapper";
import {StyledSectionWrapper} from "../../../components/StyledSectionWrapper";
import imgProfile from "../../../assets/images/profile-photo.webp";
import styled from "styled-components";

export const Main = () => {
  return (
    <StyledSectionWrapper direction="row" justify={'space-around'}>
      <StyledFlexBoxWrapper direction={'column'} gap={'10px'}>
        <span>Hi There</span>
        <h2>I am Svetlana Dyablo</h2>
        <h1>A Wev Developer.</h1>
      </StyledFlexBoxWrapper>
      <Photo src={imgProfile} alt="profile photo" />
    </StyledSectionWrapper>
);
};

const Photo = styled.img`
    max-width: 350px;
    min-width: 150px;
    max-height: 430px;
    object-fit: cover;
`



