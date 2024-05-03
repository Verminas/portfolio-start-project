import React from 'react';
import {FlexBoxWrapper} from "../../../components/FlexBoxWrapper";
import {SectionWrapper} from "../../../components/SectionWrapper";
import imgProfile from "../../../assets/images/profile-photo.webp";
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
  return (
    <SectionWrapper id={'home'} height={'100vh'}>
      <Container>
        <FlexBoxWrapper justify="space-around" align="center" gap={"0"} wrap={"wrap"}>
          <FlexBoxWrapper direction={'column'} gap={'0'} width={'fit-content'}>
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
        

        @media ${theme.media.mobile} {
            width: 314px;
            height: 414px;
            top: -20px;
            left: 17px;
        }
    }
`

const Photo = styled.img`
    width: 350px;
    min-width: 150px;
    height: 430px;
    object-fit: cover;
    position: relative;
    margin-right: 20px;
    
    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
    
`

const SmallText = styled.span`
    font-size: 14px;
    text-align: left;
`

const Name = styled.h2`
    
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmin: 36, Fmax: 50})}
    letter-spacing: 0.05em;
    text-align: left;
    margin: 10px 0;
    
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

    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
    }
`

const Title = styled.h1`
    font-size: 27px;
    text-align: left;
    ${font({Fmin: 20, Fmax: 27})}
`



