import React from 'react';
import {StyledSectionWrapper} from "../../../components/StyledSectionWrapper";
import {StyledFlexBoxWrapper} from "../../../components/StyledFlexBoxWrapper";
import {Skill} from "../../../components/Skill/Skill";
import {SectionTitle} from "../../../components/SectionTitle/SectionTitle";

export const Skills = () => {
  return (
  <StyledSectionWrapper>
    <SectionTitle>My Skills</SectionTitle>
    <StyledFlexBoxWrapper wrap={'wrap'} gap={'0'}>
      <Skill/>
      <Skill/>
      <Skill/>
      <Skill/>
      <Skill/>
      <Skill/>
    </StyledFlexBoxWrapper>
  </StyledSectionWrapper>
  );
};

