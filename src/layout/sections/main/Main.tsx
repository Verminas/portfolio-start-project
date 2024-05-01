import React from 'react';
import {FlexBoxWrapper} from "../../../components/FlexBoxWrapper";
import {SectionWrapper} from "../../../components/SectionWrapper";
import imgProfile from "../../../assets/images/profile-photo.webp";
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
  return (
    <SectionWrapper id={'home'} height={'100vh'}>
      <Container>
        <FlexBoxWrapper justify="space-between" align="center" gap={"20px"}>
          <FlexBoxWrapper direction={'column'} gap={'10px'} width={'fit-content'}>
            <SmallText>Hi There</SmallText>
            <Name>I am <span>Svetlana Dyablo</span></Name>
            <Title>A Wev Developer.</Title>
          </FlexBoxWrapper>
          <PhotoWrapper>
            <Photo src={imgProfile} alt="profile photo"></Photo>
          </PhotoWrapper>
        </FlexBoxWrapper>
      </Container>
    </SectionWrapper>
);
};

const PhotoWrapper =styled.div`
    position: relative;
    object-fit: cover;
    z-index: 1;

    &::after {
        content: "";
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};
        position: absolute;
        top: -25px;
        left: 25px;
        z-index: -1;

    }
`

const Photo = styled.img`
    width: 350px;
    min-width: 150px;
    height: 430px;
    object-fit: cover;
    position: relative;
    
`

const SmallText = styled.span`
    font-size: 14px;
    text-align: left;
`

const Name = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-align: left;
    
    span{
        white-space: nowrap;
        position: relative;
        z-index: 1;
        &::after{
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: -1;
        }
    }

`

const Title = styled.h1`
    font-size: 27px;
    text-align: left;

`



