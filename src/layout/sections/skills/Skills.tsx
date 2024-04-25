import React from 'react';
import {SectionWrapper} from "../../../components/SectionWrapper";
import {FlexBoxWrapper} from "../../../components/FlexBoxWrapper";
import {Skill} from "../../../components/Skill/Skill";
import {SectionTitle} from "../../../components/SectionTitle/SectionTitle";

type SkillsPropsType = {
  skillsInfo: {
    iconId: string,
    title: string,
    text: string,
  }[]
}

export const Skills = (props: SkillsPropsType) => {
  const skillsElements = props.skillsInfo.map(skill => {
    return (
      <Skill iconId={skill.iconId} title={skill.title} text={skill.text} key={skill.iconId} />
    )
  })
  return (
  <SectionWrapper id={'skills'}>
    <SectionTitle>My Skills</SectionTitle>
    <FlexBoxWrapper wrap={'wrap'} gap={'0'} justify={'center'}>
      {skillsElements}
    </FlexBoxWrapper>
  </SectionWrapper>
  );
};
