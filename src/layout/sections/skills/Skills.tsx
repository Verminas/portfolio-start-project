import React from 'react';
import {SectionWrapper} from "../../../components/SectionWrapper";
import {FlexBoxWrapper} from "../../../components/FlexBoxWrapper";
import {Skill} from "../../../components/Skill/Skill";
import {SectionTitle} from "../../../components/SectionTitle/SectionTitle";

export const Skills = () => {
  return (
  <SectionWrapper id={'skills'}>
    <SectionTitle>My Skills</SectionTitle>
    <FlexBoxWrapper wrap={'wrap'} gap={'0'}>
      <Skill/>
      <Skill/>
      <Skill/>
      <Skill/>
      <Skill/>
      <Skill/>
    </FlexBoxWrapper>
  </SectionWrapper>
  );
};

