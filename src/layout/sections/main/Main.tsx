import React from 'react';
import {FlexBoxWrapper} from "../../../components/FlexBoxWrapper";
import imgProfile from "../../../assets/images/profile-photo.webp";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles";
import Typewriter from 'typewriter-effect';
import Tilt from "react-parallax-tilt"
import {theme} from "../../../styles/Theme";

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
          <Tilt
            className="background-stripes parallax-effect-glare-scale"
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            tiltEnable={window.innerWidth > theme.media.mobileTs}
            scale={1.02}
            glareColor={theme.colors.accent}
          >
            <S.PhotoWrapper>
              <S.Photo src={imgProfile} alt="profile photo"></S.Photo>
            </S.PhotoWrapper>
          </Tilt>
        </S.FlexBoxWrapperMedia>
      </Container>
    </S.SectionWrapperMedia>
  );
};