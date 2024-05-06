import {Icon} from "../../../../components/Icon/Icon";
import React from "react";
import {S} from "./Skill_Styles";
import {WrapperIcon} from "../../../../components/WrapperIcon/WrapperIcon";

type SkillPropsType = {
  iconId: string,
  title: string,
  text: string,
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
  return (
    <S.WrapperSkill>
      <WrapperIcon>
        <Icon iconId={props.iconId}/>
      </WrapperIcon>
      <S.TitleSkill>{props.title}</S.TitleSkill>
      <S.TextSkill>{props.text}m</S.TextSkill>
    </S.WrapperSkill>
  )
}