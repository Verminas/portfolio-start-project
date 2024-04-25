import React from 'react';
import {SectionWrapper} from "../../../components/SectionWrapper";
import {SectionTitle} from "../../../components/SectionTitle/SectionTitle";
import {Icon} from "../../../components/Icon/Icon";
import {Slider} from "../../../components/Slider/Slider";

export const Testimony = () => {
  return (
    <SectionWrapper id={'testimony'}>
      <SectionTitle>Testimony</SectionTitle>
      <Icon iconId={'quoteSvg'}/>
      <Slider/>
    </SectionWrapper>
  );
};





