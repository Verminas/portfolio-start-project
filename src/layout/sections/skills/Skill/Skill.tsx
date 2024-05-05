import {Icon} from "../../../../components/Icon/Icon";
import React from "react";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

type SkillPropsType = {
  iconId: string,
  title: string,
  text: string,
}

export const Skill = (props: SkillPropsType) => {
  return (
    <WrapperSkill>
      <WrapperIcon>
        <Icon iconId={props.iconId}/>
      </WrapperIcon>
      <TitleSkill>{props.title}</TitleSkill>
      <TextSkill>{props.text}m</TextSkill>
    </WrapperSkill>
  )
}

const WrapperSkill = styled.div`
    width: 330px;
    flex-grow: 1;
    padding: 55px 27px 48px;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;

    @media ${theme.media.mobile} {
        padding: 62px 0 40px;
    }
`
const TitleSkill = styled.h3`
    text-transform: uppercase;
    margin: 67px 0 15px;
    text-align: center;
`

const TextSkill = styled.p`
    text-align: center;
    flex-grow: 1;
`
export const WrapperIcon = styled.div`
    position: relative;
    z-index: 1;
    &::before{
        content: "";
        display: inline-block;
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg) translate(-50%, -50%);
        z-index: -1;
        
        position: absolute;
        top: 50%;
        left: 50%;
        transform-origin: top left;
    }
    
`


