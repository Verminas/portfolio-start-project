import React from 'react';
import {SectionWrapper} from "../../../components/SectionWrapper";
import {SectionTitle} from "../../../components/SectionTitle/SectionTitle";
import {Icon} from "../../../components/Icon/Icon";
import {Slider} from "../../../components/Slider/Slider";
import {Container} from "../../../components/Container";
import {FlexBoxWrapper} from "../../../components/FlexBoxWrapper";
import {WrapperIcon} from "../skills/Skill/Skill";

export const Testimony = () => {
  return (
    <SectionWrapper id={'testimony'}>
      <Container>
        <FlexBoxWrapper direction={'column'} align={'center'}>
          <SectionTitle>Testimony</SectionTitle>
          <WrapperIcon>
            <Icon iconId={"quoteSvg"}/>
          </WrapperIcon>
          <Slider/>
        </FlexBoxWrapper>
      </Container>
    </SectionWrapper>
  );
};





