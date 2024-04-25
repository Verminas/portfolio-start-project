import React from 'react';
import {FlexBoxWrapper} from "../../../components/FlexBoxWrapper";
import {SectionWrapper} from "../../../components/SectionWrapper";
import imgProfile from "../../../assets/images/profile-photo.webp";
import styled from "styled-components";

export const Main = () => {
  return (
    <SectionWrapper id={'home'} direction="row" justify={'space-around'} height={'100vh'}>
      <FlexBoxWrapper direction={'column'} gap={'10px'}>
        <span>Hi There</span>
        <h2>I am <span>Svetlana Dyablo</span></h2>
        <h1>A Wev Developer.</h1>
      </FlexBoxWrapper>
      <Photo src={imgProfile} alt="profile photo" />
    </SectionWrapper>
);
};

const Photo = styled.img`
    max-width: 350px;
    min-width: 150px;
    max-height: 430px;
    object-fit: cover;
`



