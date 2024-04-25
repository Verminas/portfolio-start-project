import {StyledFlexBoxWrapper} from "../StyledFlexBoxWrapper";
import {Icon} from "../Icon/Icon";
import React from "react";
import styled from "styled-components";

export const Skill = () => {
  return (
    <WrapperSkill>
      <Icon iconId={'htmlSvg'}/>
      <TitleSkill>HTML</TitleSkill>
      <TextSkill>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua Ut enimю Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua Ut enim</TextSkill>
    </WrapperSkill>
  )
}

const WrapperSkill = styled.div`
    width: 33%;
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

