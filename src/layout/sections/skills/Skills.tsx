import React from 'react';
import {SectionWrapper} from "../../../components/SectionWrapper";
import {FlexBoxWrapper} from "../../../components/FlexBoxWrapper";
import {Skill} from "./Skill/Skill";
import {SectionTitle} from "../../../components/SectionTitle/SectionTitle";
import {Container} from "../../../components/Container";
import { Fade } from "react-awesome-reveal";

type SkillsPropsType = {
  skillsInfo: {
    iconId: string,
    title: string,
    text: string,
  }[]
}

export const Skills: React.FC<SkillsPropsType> = (props: SkillsPropsType) => {
  const skillsElements = props.skillsInfo.map(skill => {
    return (
      <Skill iconId={skill.iconId} title={skill.title} text={skill.text} key={skill.iconId} />
    )
  })
  return (
  <SectionWrapper id={'skills'}>
    <Container>
      <FlexBoxWrapper direction={'column'} gap={'0'}>
        <SectionTitle>My Skills</SectionTitle>
        <FlexBoxWrapper wrap={'wrap'} gap={'0'} justify={'center'}>
          <Fade cascade={true} damping={0.35}>
            {skillsElements}
          </Fade>
        </FlexBoxWrapper>
      </FlexBoxWrapper>
    </Container>
  </SectionWrapper>
  );
};