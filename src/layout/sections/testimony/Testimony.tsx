import React from 'react';
import {SectionWrapper} from "../../../components/SectionWrapper";
import {SectionTitle} from "../../../components/SectionTitle/SectionTitle";
import {Icon} from "../../../components/Icon/Icon";
import {Slider} from "../../../components/Slider/Slider";
import {Container} from "../../../components/Container";
import {WrapperIcon} from "../../../components/WrapperIcon/WrapperIcon";
import {S} from "./Testimony_Styles";

type TestimonyPropsType = {
  sliderInfo: {
    slides: Array<{name: string, text: string}>,
  }
}

export const Testimony: React.FC<TestimonyPropsType> = (props: TestimonyPropsType) => {
  return (
    <SectionWrapper id={'testimony'}>
      <Container>
        <S.FlexBoxWrapperMedia direction={'column'} align={'center'} gap={"35px"}>
          <SectionTitle>Testimony</SectionTitle>
          <WrapperIcon>
            <Icon iconId={"quoteSvg"}/>
          </WrapperIcon>
          <Slider sliderInfo={props.sliderInfo}/>
        </S.FlexBoxWrapperMedia>
      </Container>
    </SectionWrapper>
  );
};