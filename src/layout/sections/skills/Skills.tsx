import React from 'react';
import {StyledSectionWrapper} from "../../../components/StyledSectionWrapper";
import {StyledFlexBoxWrapper} from "../../../components/StyledFlexBoxWrapper";
import {Skill} from "../../../components/Skill/Skill";

export const Skills = () => {
  return (
  <StyledSectionWrapper>
    <h2>My Skills</h2>
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

