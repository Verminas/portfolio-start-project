import React from 'react';
import {FlexBoxWrapper} from "../../../components/FlexBoxWrapper";
import imgProfile from "../../../assets/images/profile-photo.webp";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles";
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
  return (
    <S.SectionWrapperMedia id={'home'} height={'100vh'}>
      <Container>
        <S.FlexBoxWrapperMedia justify="space-around" align="center" gap={"0"} wrap={"wrap"}>
          <FlexBoxWrapper direction={'column'} gap={'0'} width={'fit-content'}>
            <S.SmallText>Hi There</S.SmallText>
            <S.Name>I am <span>Svetlana Dyablo</span></S.Name>
            <S.Title>
              <p>A Web Developer, A Frontend Developer</p>
              <Typewriter
                options={{
                  strings: ['A Web Developer.', 'A Frontend Developer.'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </S.Title>

          </FlexBoxWrapper>
          <S.PhotoWrapper>
            <S.Photo src={imgProfile} alt="profile photo"></S.Photo>
          </S.PhotoWrapper>
        </S.FlexBoxWrapperMedia>
      </Container>
    </S.SectionWrapperMedia>
  );
};