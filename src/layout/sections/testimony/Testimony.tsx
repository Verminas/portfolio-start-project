import React from 'react';
import {SectionWrapper} from "../../../components/SectionWrapper";
import {SectionTitle} from "../../../components/SectionTitle/SectionTitle";
import {Icon} from "../../../components/Icon/Icon";
import {Slider} from "../../../components/Slider/Slider";
import {Container} from "../../../components/Container";
import {FlexBoxWrapper} from "../../../components/FlexBoxWrapper";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {WrapperIcon} from "../../../components/WrapperIcon/WrapperIcon";

export const Testimony = () => {
  return (
    <SectionWrapper id={'testimony'}>
      <Container>
        <FlexBoxWrapperMedia direction={'column'} align={'center'} gap={"35px"}>
          <SectionTitle>Testimony</SectionTitle>
          <WrapperIcon>
            <Icon iconId={"quoteSvg"}/>
          </WrapperIcon>
          <Slider/>
        </FlexBoxWrapperMedia>
      </Container>
    </SectionWrapper>
  );
};

const FlexBoxWrapperMedia = styled(FlexBoxWrapper)`
    @media ${theme.media.mobile} {
      gap: 60px;
      
      p {
        margin: 13px 0 25px;
      }
    }
`





