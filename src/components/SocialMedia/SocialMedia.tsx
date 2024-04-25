import React from "react";
import {Icon} from "../Icon/Icon";
import styled from "styled-components";

export const SocialMedia = () => {
  return (
    <StyledSocialMediaList>
      <li>
        <a href="#">
          <Icon iconId={'instSvg'}></Icon>
        </a>
      </li>
      <li>
        <a href="#">
          <Icon iconId={'vkSvg'}></Icon>
        </a>
      </li>
      <li>
        <a href="#">
          <Icon iconId={'telegramSvg'}></Icon>
        </a>
      </li>
      <li>
        <a href="#">
          <Icon iconId={'linkedinSvg'}></Icon>
        </a>
      </li>
    </StyledSocialMediaList>
  )
}

const StyledSocialMediaList = styled.ul`
    display: flex;
    gap: 5px;
    
    svg{
        width: 35px;
        height: 35px;
    }
`