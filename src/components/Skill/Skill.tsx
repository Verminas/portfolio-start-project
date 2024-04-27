import {Icon} from "../Icon/Icon";
import React from "react";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

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
      <TitleSkill>{props.title.toUpperCase()}</TitleSkill>
      <TextSkill>{props.text}m</TextSkill>
    </WrapperSkill>
  )
}

const WrapperSkill = styled.div`
    width: 380px;
    //width: 30%;
    padding: 30px 20px 40px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
`
const TitleSkill = styled.h3`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    text-align: center;
    margin: 70px 0 15px;
`

const TextSkill = styled.p`
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    line-height: 1.4;
`
const WrapperIcon = styled.div`
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


