import {Icon} from "../Icon/Icon";
import React from "react";
import styled from "styled-components";

type SkillPropsType = {
  iconId: string,
  title: string,
  text: string,
}

export const Skill = (props: SkillPropsType) => {
  return (
    <WrapperSkill>
      <Icon iconId={props.iconId}/>
      <TitleSkill>{props.title}</TitleSkill>
      <TextSkill>{props.text}m</TextSkill>
    </WrapperSkill>
  )
}

const WrapperSkill = styled.div`
    width: 30%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 15px;
    flex-wrap: wrap;
`
const TitleSkill = styled.h3``

const TextSkill = styled.p``

